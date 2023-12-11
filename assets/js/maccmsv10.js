/* Offcanvas */
$("#offcanvasSidebarMenu .nav-link").click(function(){
    $('.offcanvas').offcanvas('hide');
});

$(document).ready(function(){
    $('section').waypoint(function(direction) {
        //var activeSection = $(this).next();
        var activeSection = $(this);
        if(direction === 'down'){
            activeSection = $(this).next();
        }
        var sectionId   = this.element.id;
        $('ul li').removeClass('active');
        $('ul li.' + sectionId).addClass('active');
    });
});

$('a[href*=\\#]:not([href=\\#])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
    || location.hostname == this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('html,body').animate({
             scrollTop: target.offset().top - (target.height() / 5)
        }, 500);
        return false;
    }
}
});
