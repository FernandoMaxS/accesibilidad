$( document ).ready(function() {
    $('#sitio').click(function(){
     var container = $('html'),
    scrollTo = $('#interes');

container.animate({
    scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
});
}); 
$('#pie').click(function(){
     var container = $('html'),
    scrollTo = $('#redes_sociales');

container.animate({
    scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
});
}); 
 
 
});


