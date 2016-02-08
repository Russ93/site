$('document').ready(function () {
    listr($('#timeline > li'));
    $('.chart').easyPieChart({
        animate: 2000,
        size: 200,
        lineWidth: 5,
        trackColor: false,
        scaleColor: false,
        barColor: "color"
    });

    chartSpans();

    $(".skills span").addClass('hidden-xs')
    $(".skills canvas").addClass('hidden-xs')

    $("nav div").click(function () {
        $("body").animate({
            scrollTop: 0
        }, 1000, 'swing');
    });

    $(".age").text(((new Date() - new Date("11/03/1993"))/3.1556926e10).toFixed(0));

    var nav = $('nav ul > li');
    for (var i = 0; i < nav.length; i++) {
        $(nav[i]).click(function () {
            $("body").animate({
                scrollTop: $('[loc=' + $(this).attr('go') + ']').offset().top - 70
            }, 2000, 'swing');
        });
    };

});



function chartSpans(){
    var chartText = $('.chart span').each(function(){
      var canvas = $(this).siblings('canvas'),
            canHeight = canvas.height() / 2,
            canWidth = canvas.width() / 2,
            height = canHeight - $(this).height() / 2,
            width = canWidth - $(this).width() / 2;

        $(this).css('margin', height + "px 0 0 " + width + "px");
    })
}

// ------------------------------ Info Graphic ------------------------------ //
function listr(timeLine) {
    $('dfn').css('display', 'none');
    for (var i = 0; timeLine.length > i; i++) {
        $(timeLine[i]).mouseenter(function (e) {
            var $this = $(this);

            if (($this.width() / $this.parent().width()) < '.26') {
                // if the width is greater than 26% dont do anything yet
                $this.animate({
                    'width': '50%',
                    'padding-bottom': '50%',
                    'margin-left': '0',
                    'margin-right': '0'
                }, 200);
                //aniamte the grow
                $($this.children('p')).animate({
                    'margin': '15% 10% 0'
                }, 200);
                // move the head up
                $($this.children('dfn')).show()
                // show the dfn
            }
        });

        $(timeLine[i]).mouseleave(function () {
            var $this = $(this);
            $this.animate({
                width: '25%',
                'padding-bottom': '25%',
                'margin-left': '10%',
                'margin-right': '10%'
            }, 200);
            $($this.children('p')).animate({
                margin: '35% 5% 0'
            }, 200);
            $($this.children('dfn')).hide()
        });
    }
}



// ------------------------------ hakrtypr ------------------------------ //

$(function () {
    $('body').keydown(
        function (event) {
            Typer.addText(event); //Capture the keydown event and call the addText, this is executed on page load
            //            clearInterval(interv);
        }
    );
    $('body').click(
        function (event) {
            Typer.addText(event); //Capture the keydown event and call the addText, this is executed on page load
        }
    );
    var interv = setInterval(function () {
        Typer.addText({
            keyCode: 0
        }); //Capture the keydown event and call the addText, this is executed on page load
    }, 1000)
});

var Typer = {
    text: null,
    accessCountimer: null,
    index: 0, // current cursor position
    speed: 2, // speed of the Typer
    file: "", //file, must be setted
    init: function () { // inizialize Hacker Typer
        $.get(Typer.file, function (data) {self.Typer.text=data});
    },
    content: function () {
        return $("#console").html(); // get console content
    },
    write: function (str) { // append to console content
        $("#console").append(str);
        return false;
    },
    addText: function (key) { //Main function to add the code
        if (Typer.text) { // otherway if text is loaded
            var cont = Typer.content(); // get the console content
            if (cont.substring(cont.length - 1, cont.length) == "|") // if the last char is the blinking cursor
                $("#console").html($("#console").html().substring(0, cont.length - 1)); // remove it before adding the text
            if (key.keyCode != 8) { // if key is not backspace
                Typer.index += Typer.speed; // add to the index the speed
            } else {
                if (Typer.index > 0) // else if index is not less than 0 
                    Typer.index -= Typer.speed; //	remove speed for deleting text
            }
            var text = $("<div/>").text(Typer.text.substring(0, Typer.index)).html(); // parse the text for stripping html enities
            var rtn = new RegExp("\n", "g"); // newline regex
            var rts = new RegExp("\\s", "g"); // whitespace regex
            var rtt = new RegExp("\\t", "g"); // tab regex
            $("#console").html(text.replace(rtn, "<br/>").replace(rtt, "&nbsp;&nbsp;&nbsp;&nbsp;").replace(rts, "&nbsp;")); // replace newline chars with br, tabs with 4 space and blanks with an html blank
            $('#console').parent().height($('#header').height())
        }
    },
    updLstChr: function () { // blinking cursor
        var cont = this.content(); // get console 
        if (cont.substring(cont.length - 1, cont.length) == "|") // if last char is the cursor
            $("#console").html($("#console").html().substring(0, cont.length - 1)); // remove it
        else
            this.write("|"); // else write it
    }
}

Typer.speed = 3;

Typer.file = 'code.txt';

Typer.init();