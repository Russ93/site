$.fn.serializeObject = function(){
    var object = {};
    var array = this.serializeArray();
    $.each(array, function() {
        if (object[this.name] !== undefined) {
            if (!object[this.name].push) {
                object[this.name] = [object[this.name]];
            };
            object[this.name].push(this.value || '');
        } else {
            object[this.name] = this.value || '';
        };
    });
    return object;
};

$("document").ready(function(){
    $("form").submit(function(event){
        var date, hour, min, form, start, code, stage, live, end;
        event.preventDefault();
        
        date = new Date();
        hour = date.getHours();
        min = date.getMinutes();
        
        form = $(this).serializeObject();
        
        start = form.start_hours+(form.start_min/60);
        code = form.code_hours+(form.code_min/60);
        stage = form.stage_hours+(form.stage_min/60);
        live = form.live_hours+(form.live_min/60);
        end = ;
        
        makeChart(start,code,stage,live,end);
    });
})
function makeChart(start,code,stage,go,end){
    var canvas, ctx, data, options;

    canvas= document.getElementById("canvas"),
    ctx =canvas.getContext("2d"),
    data = [
        {
            value:overflow,
            color: "#B93B3E"
        }
        {
            value: start,
            color: "#eee"
        },
        {
            value: code,
            color:"#315F93"
        },
        {
            value : stage,
            color : "#BEBAB1"
        },
        {
            value : go,
            color : "#B93B3E"
        },
        {
            value : end,
            color : "#eee"
        }
    ],
    options = {
        bezierCurve: false,
        onAnimationComplete: done
    };
    new Chart(ctx).Doughnut(data,options);
    
    function done() {
        var dataURL = canvas.toDataURL();
        document.getElementById('canvasImg').src = dataURL;
        $('#canvas').hide();
    };
};