// bootstrap响应式导航条<br data-filtered="filtered">;(function($, window, undefined) {
// outside the scope of the jQuery plugin to
// keep track of all dropdowns
var $allDropdowns = $();

// if instantlyCloseOthers is true, then it will instantly
// shut other nav items when a new one is hovered over
$.fn.dropdownHover = function (options) {

    // the element we really care about
    // is the dropdown-toggle's parent
    $allDropdowns = $allDropdowns.add(this.parent());

    return this.each(function () {
        var $this = $(this).parent(),
            defaults = {
                delay: 500,
                instantlyCloseOthers: true
            },
            data = {
                delay: $(this).data('delay'),
                instantlyCloseOthers: $(this).data('close-others')
            },
            options = $.extend(true, {}, defaults, options, data),
            timeout;

        $this.hover(function () {
            if (options.instantlyCloseOthers === true)
                $allDropdowns.removeClass('open');

            window.clearTimeout(timeout);
            $(this).addClass('open');
        }, function () {
            timeout = window.setTimeout(function () {
                $this.removeClass('open');
            }, options.delay);
        });
    });
};
$('[data-hover="dropdown"]').dropdownHover();

// var languagePosition = document.getElementsByClassName('languagePosition')[0];
// var languageBox = document.getElementById('hover');
// languageBox.addEventListener('mouseenter', function () {
//     languagePosition.style.display = 'inherit';
// })
// languagePosition.addEventListener('mouseleave', function () {
//     languagePosition.style.display = 'none';
// })

