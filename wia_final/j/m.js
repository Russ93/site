window.onload = function () {
    if (Modernizr.canvas) {
        console.log('Canvas is supported')
        //------------------------------ Logo ------------------------------//
        var canvas = document.getElementById("logo"),
            ctx = canvas.getContext("2d");
        if (ctx) {
            //Styles
            ctx.fillStyle = '#000';

            //Text
            ctx.font = '36px Montserrat';
            ctx.fillText('Soda vs Water', 50, 50);

            ctx.fillStyle = "rgb(0,0,0)";
            ctx.beginPath();
            ctx.moveTo(7, 21);
            ctx.bezierCurveTo(7, 22, 6, 23, 5, 24);
            ctx.lineTo(6, 27);
            ctx.lineTo(10, 59);
            ctx.lineTo(34, 59);
            ctx.lineTo(38, 27);
            ctx.lineTo(39, 24);
            ctx.bezierCurveTo(38, 23, 37, 22, 37, 21);
            ctx.lineTo(37, 21);
            ctx.bezierCurveTo(37, 23, 36, 24, 34, 24);
            ctx.bezierCurveTo(33, 24, 31, 23, 31, 21);
            ctx.lineTo(31, 21);
            ctx.bezierCurveTo(31, 23, 30, 24, 28, 24);
            ctx.bezierCurveTo(26, 24, 25, 23, 25, 21);
            ctx.lineTo(25, 21);
            ctx.bezierCurveTo(25, 23, 23, 24, 22, 24);
            ctx.bezierCurveTo(20, 24, 19, 23, 19, 21);
            ctx.lineTo(19, 21);
            ctx.bezierCurveTo(19, 23, 18, 24, 16, 24);
            ctx.bezierCurveTo(14, 24, 13, 23, 13, 21);
            ctx.lineTo(13, 21);
            ctx.bezierCurveTo(13, 23, 11, 24, 10, 24);
            ctx.bezierCurveTo(8, 24, 7, 23, 7, 21);
            ctx.lineTo(7, 21);
            ctx.lineTo(7, 21);
            ctx.fill();

            ctx.fillStyle = "rgb(255,255,255)";
            ctx.beginPath();
            ctx.moveTo(22, 24);
            ctx.bezierCurveTo(20, 24, 19, 23, 19, 21);
            ctx.lineTo(19, 21);
            ctx.bezierCurveTo(19, 23, 18, 24, 16, 24);
            ctx.bezierCurveTo(14, 24, 13, 23, 13, 21);
            ctx.lineTo(13, 21);
            ctx.bezierCurveTo(13, 23, 11, 24, 10, 24);
            ctx.bezierCurveTo(8, 24, 7, 23, 7, 21);
            ctx.lineTo(7, 21);
            ctx.lineTo(7, 21);
            ctx.bezierCurveTo(7, 22, 6, 23, 5, 24);
            ctx.lineTo(6, 27);
            ctx.lineTo(10, 59);
            ctx.lineTo(22, 59);
            ctx.fill();

            ctx.lineStyle = "rgb(0,0,0)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(35, 61);
            ctx.lineTo(44, 0);
            ctx.lineTo(0, 0);
            ctx.lineTo(9, 61);
            ctx.lineTo(35, 61);
            ctx.stroke();

        }
        //------------------------------ Water ------------------------------//
        //------------------------------ Dehydration ------------------------------//
        var dehy = document.getElementById("dehydrated"),
            dhy = dehy.getContext("2d"),
            data = [
                {
                    value: 75,
                    color: "#ACCBE8"
            },
                {
                    value: 25,
                    color: "#076BB6"
            }
        ],
            health = $('#health > li');
        new Chart(dhy).Doughnut(data);
        //------------------------------ Hunger ------------------------------//
        var hun = document.getElementById("hunger"),
            hung = hun.getContext("2d"),
            data = [
                {
                    value: 37,
                    color: "#ACCBE8"
            },
                {
                    value: 63,
                    color: "#076BB6"
            }
        ];
        new Chart(hung).Doughnut(data);
    }else{
        console.log('Canvas is not supported inducting html5shiv')
        $('head').append('<script src="j/html5shiv.js"></script>')
    }
    //------------------------------ Info Graphic ------------------------------//
    for (var i = 0; health.length > i; i++) {
        $(health[i]).children('dfn').hide()
        $(health[i]).mouseenter(function (e) {
            if (($(this).width() / $(this).parent().width()) < '.3') {
                // if the width is greater than 26% dont do anything yet
                $(this).animate({
                    width: '45%',
                    'padding-bottom': '45%',
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

        $(health[i]).mouseleave(function () {
            $(this).animate({
                width: '28%',
                'padding-bottom': '28%',
                'margin-left': '10%',
                'margin-right': '10%'
            }, 200);
            $($(this).children('p')).animate({
                margin: '40% 5% 0'
            }, 200);
            $($(this).children('dfn')).hide()
        });
    }

    //------------------------------ Coke ------------------------------//
    //------------------------------ 2 Gallons ------------------------------//
    $('#gallons').animate({
        width: '176px'
    })
    $('#gallons,#dehydrated,#hunger').siblings('#g,#d,#h').hide()
    $('#gallons').mouseenter(function(){$(this).siblings('#g').fadeIn()}).mouseleave(function(){$(this).siblings('#g').fadeOut()})
    $('#dehydrated').mouseenter(function(){$(this).siblings('#d,#h').fadeIn()}).mouseleave(function(){$(this).siblings('#d,#h').fadeOut()})

}