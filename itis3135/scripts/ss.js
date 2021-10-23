$(document).ready(function(){
$('.next').on('click', function(){
    var actImage = $('.active');
    var nextImage = actImage.next();

    if(nextImage.length){
        actImage.removeClass('active').css('z-index', -10);
        nextImage.addClass('active').css('z-index', 10);
        console.log('clicked');
    }
});

$('.back').on('click', function(){
    var actImage = $('.active');
    var backImage = actImage.back();

    if(backImage.length){
        actImage.removeClass('active').css('z-index', -10);
        backImage.addClass('active').css('z-index', 10);
    }
});

});