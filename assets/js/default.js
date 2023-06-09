/*!
 * Start Bootstrap - Agency v5.2.2 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
 */

!function (e) {
    "use strict";

    // set the current page active in the nav bar
    e('a[href$="' + location.pathname + '"]').addClass('active'),

    // handle navbar resizing
    e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = e(this.hash);
            if ((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length) return e("html, body").animate({
                scrollTop: a.offset().top - 54
            }
                , 1e3, "easeInOutExpo"), !1
        }

    }),
    e(".js-scroll-trigger").click(function () {
        e(".navbar-collapse").collapse("hide")
    });

    function a() {
        100 < e("#mainNav").offset().top ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink")
    }

    a(), e(window).scroll(a)
}(jQuery);
