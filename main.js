$('.fade-in').fadeIn(1000);


$(".navigation").find("a").click(function (e) {
    var section = $(this).attr("href");
    $(document.body).animate({
        'scrollTop': $(section).offset().top
    }, 2000);
});

$('#type-it').typeIt({
    strings: ['Business Student.', 'Tech Enthusiast.', 'Problem Solver.'],
    startDelay: 1000,
    breakLines: false,
    loop: true,
    speed: 80,
    deleteDelay: 3000,
    loopDelay: 4000
});

$(".strenghts").on('mouseenter', event => {
    $(event.currentTarget).css({
        opacity: .7
    })
}).on('mouseleave', event => {
    $(event.currentTarget).css({
        opacity: 1
    })
})

/*
$('.navigation li').on('mouseenter', event => {
    $('.navigation li').siblings().removeClass('active')
    $(event.currentTarget).addClass('active')
}).on('mouseleave', event => {
    $(event.currentTarget).removeClass('active')
})
*/

var scroll_start = 0;

function fadeNavBar(id, bottom) {
    $(document).scroll(function () {

        var $scrollVal = $(id);
        var offset = $scrollVal.offset();


        scroll_start = $(this).scrollTop();

        if (id === '#about') {
            var val = '#s1';
        } else if (id === '#experience') {
            val = '#s2';
        } else if (id === '#accomplishments') {
            val = '#s3';
        } else if (id === '#education') {
            val = '#s4';
        } else if (id === '#volunteer') {
            val = '#s5';
        }


        if (((scroll_start + 5) >= offset.top) & (scroll_start < bottom)) {
            $(val).css({
                'color': '#2292A4',
                'backgroundColor': '#F5EFED'
            });
        } else {
            $(val).css({
                'color': '#F5EFED',
                'background-color': '#2292A4'
            });
        }
    });
}

fadeNavBar('#about', 1350);
fadeNavBar('#experience', 2900);
fadeNavBar('#accomplishments', 3320);
fadeNavBar('#education', 3600);
fadeNavBar('#volunteer', 4000);


//Timeline 



(function () {

    'use strict';

    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }



    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

})();

$('.btn').on('click', event => {
    $(event.currentTarget).next().slideToggle(400);

    if ($(event.currentTarget).next().is(":hidden")) {
        $('.btn').text('See More');
    } else {
        $('.btn').text('See Less');
    }
});
