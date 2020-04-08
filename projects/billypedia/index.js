/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //

        // uncomment this to inspect all available data; delete when done //

        // EXAMPLE: Looping over top rated recordings; replace with your code //
        // let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // });
          // todo 3//      
        $($('#section-bio')).css('color', 'orange').css('jokerman', 'bold');
        $('#section-bio').css('background-color', 'gray').css('border-radius', '4px');
        $('.heading-article').css('color', 'white').css('padding-left', '10px');
        $('#section-quotes').css('background-color', 'gray').css('border-radius', '4px');
        $('#section-quotes').css('color', 'purple').css('font-family', 'jokerman')
        $('#section-quotes').prependTo('#sections');

        // 
        
        
        //todo 4 //
let topRated = data.discography.topRated;
_.forEach(topRated, function(titles) {
    console.log(titles);
});

$('topRated').appendTo("list-top-rated").css('font-family',"jokerman");  


        


    })        // YOUR CODE ABOVE HERE //
    
    .fail(function() { console.log('getJSON on discography failed!') }); 
});
