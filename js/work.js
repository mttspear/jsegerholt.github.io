$( document ).ready( function() {

    //    $( "body" ).fadeTo( 1000, 1 ); 
    var id = get_id(), 
        cont = $( "#main-container" ); 
    console.log( id ); 

    // remove previous images and such
    cont.empty(); 

    var ids = {
        "#g01" : {
            images: [ '<div class="col-xs-12 col-md-9 examples">' +
                     '<div class="col-xs-12 bounds"> <img class="img-responsive" src="imgs/1/1.1.jpg" alt="">  </div>' + 
                     '<div class="col-xs-12 bounds"> <img class="img-responsive" src="imgs/1/1.2.jpg" alt="">  </div>' +
                     '<div class="col-xs-12 bounds"> <img class="img-responsive" src="imgs/1/1.3.jpg" alt="">  </div>' +
                     '<div class="col-xs-12 bounds"> <img class="img-responsive" src="imgs/1/1.4.jpg" alt="">  </div>' +
                     '<div class="col-xs-12 bounds"> <img class="img-responsive" src="imgs/1/1.5.jpg" alt="">  </div>' +
                     '</div>' ], 
            description: '<div id="no-pad" class="col-md-2">' +
            '<p> Nike Sportswear </p>' +
            '<p> Fall 2015 </p>' + 
            '<p> Photo: Billy Kidd </p>' + 
            '</div>'
        }
    }


    //                images: [ '<div class="col-xs-12 col-md-6 col-md-offset-2 examples">    <img class="img-responsive" src="imgs/nba/1.1.jpg" alt="">  </div>', 
    //                     '<div class="col-xs-12 col-md-6 col-md-offset-2 examples">    <img class="img-responsive" src="imgs/nba/1.2.jpg" alt="">  </div>' ], 

    console.log( ids );

    // add the images
    for ( var i = 0; i < ids[ id ].images.length; i++ ) {
        cont.append( ids[ id ].images[ i ] )    
    }
    // add the tiny description
    cont.append( ids[ id ].description ); 

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