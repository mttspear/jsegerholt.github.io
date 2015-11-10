


$( document ).ready( function() {
    var $item = $( '.imgs' );
    $item.on( 'click', function() {
        console.log( $( this ).attr( 'id' ) ); 
        var id = $( this ).attr( 'id' ); 
        //        $( "body" ).fadeTo( 1000, 0 ); 
        // change later!
        //        setTimeout( function() {

        //        window.location.href = 'http://jsegerholt.github.io/work.html#' + id ; 

        window.location.href = 'file:///Volumes/WorkHD/Users/derin_akintilo/Developer/Personal/jsegerholt.github.com/work.html#' + id ; 
        //        }, 1010 )

    }); 
})
