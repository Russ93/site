(function () {
    'use strict';
    $('document').ready(function () {
        $('.age').html((new Date().getFullYear()) - 1993);
        var timeLine = $('#timeline > li'),
            skills = $('#skills > li'),
            nav = $('nav ul > li');

        $('dfn').css('display', 'none');

        $('.shake').jrumble()
        $('.shake').trigger('startRumble')
        $('#carousel').coinslider({
            effect: 'swirl',
            height: 400,
            width: 900,
            spw: 10,
            delay: 4000
        });

        //------------------------------ Navigation ------------------------------//
        //            $('nav ul li:contains(skills)').click(function () {
        //                $("body").animate({
        //                    scrollTop: $('body .wrap:nth-child(5)').offset().top - 90
        //                }, 2000, 'swing')
        //            })
        $('nav div.wrap h3').click(function () {
            $("body").animate({
                scrollTop: $('header').offset().top - 90
            }, 2000, 'swing')
        })
        $('nav ul li:contains(Web)').click(function () {
            $("body").animate({
                scrollTop: $('#web').offset().top - 90
            }, 2000, 'swing')
        })
        $('nav ul li:contains(About)').click(function () {
            $("body").animate({
                scrollTop: $('#about').offset().top - 90
            }, 2000, 'swing')
        })
        $('nav ul li:contains(Hobbies)').click(function () {
            $("body").animate({
                scrollTop: $('#notWork').offset().top - 90
            }, 2000, 'swing')
        })
        $('nav ul li:contains(What)').click(function () {
            $("body").animate({
                scrollTop: $('#wia').offset().top - 90
            }, 2000, 'swing')
        })
        $('nav ul li:contains(Contact)').click(function () {
            $("body").animate({
                scrollTop: $('footer').offset().top - 90
            }, 2000, 'swing')
        })
        //        $(fi).click(function(){
        //    		$("body").animate({scrollTop: $(tli).offset().top-80}, 2000,'swing')
        //    	})
        //------------------------------ Info Graphic ------------------------------//
        for (var i = 0; timeLine.length > i; i++) {
            $(timeLine[i]).mouseenter(function (e) {

                if (($(this).width() / $(this).parent().width()) < '.26') {
                    // if the width is greater than 26% dont do anything yet
                    $(this).animate({
                        width: '50%',
                        'padding-bottom': '50%',
                        'margin-left': '0',
                        'margin-right': '0'
                    }, 200);
                    //aniamte the grow
                    $($(this).children('p')).animate({
                        margin: '15% 10% 0'
                    }, 200);
                    // move the head up
                    $($(this).children('dfn')).show()
                    // show the dfn
                }
            });

            $(timeLine[i]).mouseleave(function () {
                $(this).animate({
                    width: '25%',
                    'padding-bottom': '25%',
                    'margin-left': '10%',
                    'margin-right': '10%'
                }, 200);
                $($(this).children('p')).animate({
                    margin: '40% 5% 0'
                }, 200);
                $($(this).children('dfn')).hide()
            });
        }
        //------------------------------ Skills ------------------------------//
        for (var a = 0; skills.length > a; a++) {
            $(skills[a]).mouseenter(function (e) {
                var dfn = $(this).children('dfn'),
                    lvl = Number($(dfn).attr('lvl')),
                    prt = lvl - 28,
                    counter = $(dfn).children('span');
                if (lvl > 200) {
                    counter = $(dfn).children('span').children('span')
                    prt = 81
                }
                if (Number(counter.html()) < 2) {
                    $(counter).countTo({
                        from: 0,
                        to: lvl,
                        speed: 1000,
                        refreshInterval: 50
                    })
                }
                $(dfn).show()
                $(dfn).animate({
                    'width': prt + '%'
                })

            })
        }
        //------------------------- Canvas -------------------------//
        if (Modernizr.canvas) {
            var canvas = document.getElementById("canvas"),
                ctx = canvas.getContext("2d"),
                data = [
                    {
                        value: 40,
                        color: "#076BB6"
                    },
                    {
                        value: 20,
                        color: "#ACCBE8"
                    },
                    {
                        value: 20,
                        color: "#4D9379"
                    },
                    {
                        value: 10,
                        color: "#7F7EA8"
                    },
                    {
                        value: 5,
                        color: "#A9B2B1"
                    },
                    {
                        value: 5,
                        color: "#E66665"
                    }
        ];
            new Chart(ctx).Doughnut(data);
        }
        //------------------------- Counter function -------------------------//
        $.fn.countTo = function (options) {
            // merge the default plugin settings with the custom options
            options = $.extend({}, $.fn.countTo.defaults, options || {});

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(options.speed / options.refreshInterval),
                increment = (options.to - options.from) / loops;

            return $(this).each(function () {
                var _this = this,
                    loopCount = 0,
                    value = options.from,
                    interval = setInterval(updateTimer, options.refreshInterval);

                function updateTimer() {
                    value += increment;
                    loopCount++;
                    $(_this).html(value.toFixed(options.decimals));

                    if (typeof (options.onUpdate) == 'function') {
                        options.onUpdate.call(_this, value);
                    }

                    if (loopCount >= loops) {
                        clearInterval(interval);
                        value = options.to;

                        if (typeof (options.onComplete) == 'function') {
                            options.onComplete.call(_this, value);
                        }
                    } //if(loopCount)
                } //Timer Update
            }); //return
        }; //countTo
        //------------------------- ?! -------------------------//  
        $('ul li:contains(?!)').click(function () {
            $('#easter').prepend("<h1>CODE SNIPPETS!!!!</h1><audio autoplay='autoplay'><source src='i/a.mp3' type='audio/mpeg'/><source src='i/a6.ogg' type='audio/ogg'/></audio>")
            $('#easter').children('h1').jrumble()
            $('#easter').children('h1').trigger('startRumble')
            $(this).unbind()
            var self = this
            $('#easter').click(function () {
                $('#easter').hide();
                $(self).hide();
            })
            $(this).click(function () {
                $(this).hide();
                $('#easter').hide();
            })
        })
    });
})();