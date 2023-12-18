/* Offcanvas
$("#offcanvasSidebarMenu .nav-link").click(function(){
    $('.offcanvas').offcanvas('hide');
});
 */

$(document).ready(function () {
    $('section').waypoint(function (direction) {
        //var activeSection = $(this).next();
        var activeSection = $(this);
        if (direction === 'down') {
            activeSection = $(this).next();
        }
        var sectionId = this.element.id;
        $('.sidebar ul li').removeClass('active');
        $('.sidebar ul li.' + sectionId).addClass('active');
    });
});

$('a[href*=\\#]:not([href=\\#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - (target.height() / 5)
            }, 500);
            return false;
        }
    }
});

// faq sub menu
$("#faqSubMenuToggle").click(function () {
    $(".faq-menu").addClass("close");
    $("#faqSubMenuToggle").css({
        "-webkit-transform": "rotate(" + 180 + "deg)",
        "-moz-transform": "rotate(" + 180 + "deg)",
        transform: "rotate(" + 180 + "deg)"
    });
    setTimeout(function() {
        window.location.href = 'guide/faq.html';
    }, 300);
});
