$(function()
{
    $('#slideshow img:gt(0)').hide();

    $('#back').click(function()
{
        $('#slideshow img:first').fadeOut(800);
        $('#slideshow img:last').fadeIn(800).prepentTo('#slideshow');

});
    $('#next').click(function()
{
    $('#slideshow img:first').fadeOut(800).next().fadeIn(800).end().appendTo('#slideshow');
    
});
});