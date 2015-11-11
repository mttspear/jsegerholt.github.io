$( document ).ready( function() {


    //    $( "body" ).fadeTo( 1000, 1 ); 
    var id = get_id(), 
        cont = $( "#main-container" ), 
        images = $( '#ani' ); 

    // remove previous images and such
    cont.empty(); 

    // add the images
    for ( var i = 0; i < ids[ id ].images.length; i++ ) {
        cont.append( ids[ id ].images[ i ] )    
    }
    // add the tiny description
    cont.append( ids[ id ].description ); 

    //    $(window).on("load", function() {
    //        // weave your magic here.
    //        images.addClass( "fadeIn" );
    //    });

    $('#main-container').waitForImages({ 
        finished: function() {
            // ...
        },
        each: function() {
            // ...
            $( this ).addClass( 'scene_element150 fadeIn' );
        },
        waitForAll: false

    }).progress( function( loaded, count, success ) {
        //        alert(loaded + ' of ' + count + ' images has ' + (success ? 'loaded' : 'failed to load') +  '.');

    });
    //    $(".img-responsive").lazyload({
    //        container: $( '#main-container' ), 
    //        effect : "fadeIn"
    //    });

    //    console.log( 'this is the new id: ', id ); 
    //                images: [ '<div class="col-xs-12 col-md-6 col-md-offset-2 examples">    <img class="img-responsive" src="imgs/nba/1.1.jpg" alt="">  </div>', 
    //                     '<div class="col-xs-12 col-md-6 col-md-offset-2 examples">    <img class="img-responsive" src="imgs/nba/1.2.jpg" alt="">  </div>' ], 

    //    console.log( 'all ids ', ids );
    /*
    if ($(window).width() < 768) {
        // do something for small screens
        console.log( "768" )
    }
    else if ($(window).width() >= 768 &&  $(window).width() <= 992) {
        // do something for medium screens
        console.log( "> 768 < 992" )
    }
    else if ($(window).width() > 992 &&  $(window).width() <= 1200) {
        // do something for big screens
        console.log( "> 992 < 1200" )
    }
    else  {
        // do something for huge screens
        console.log( "huge" )
    }
*/
})

function get_id() {

    var url = window.location.href, 
        id = window.location.hash; 
    return id; 
}


//
//'<div class="col-xs-12 col-md-6 col-md-offset-2 examples"><img class="img-responsive" src="imgs/nba/1.1.jpg" alt=""></div>'
//'<div class="col-xs-12 col-md-6 col-md-offset-2 examples"><img class="img-responsive" src="imgs/nba/1.2.jpg" alt=""></div>'


//                            <div id="no-pad" class="col-md-2 col-md-offset-1"> 
//                                <p> Nike Sportswear </p>
//                                <p> Fall 2015 </p>
//                                <p> Photo: Billy Kidd </p>
//                            </div>