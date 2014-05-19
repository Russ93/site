<?php
header('Access-Control-Allow-Origin: *'); 

$send = "<html>

<head>
    <link rel='stylesheet' href='//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css'>
    <style>
        nav {
            background: #00979c;
            color: #fefefe;
            padding: 25px;
        }
        .console {
            background: #e9e9e9;
            border: solid 1px #999;
            border-radius: 3px;
            min-height: 450px;
        }
    </style>
    <script type='text/javascript' src='http://code.jquery.com/jquery-2.1.1.min.js'></script>
    <script type='text/javascript'>
        $('document').ready(function () {
            $('button').each(function () {
                $(this).click(function () {
                    action = $(this).attr('action')
                    b = {
                        url: action,
                        type: 'get',
                        dataType: 'json',
                        success: function (e) {
                            location.reload();
                        }
                    };
                    $.ajax(b);
                });
            });
            setInterval(function(){
                $.ajax({
                    url: '/?log',
                    type: 'get',
                    dataType: 'json',
                    success: function(response){
                        $('.console').html(response);
                    }
                });
                $.ajax({
                    url: '/?log',
                    type: 'get',
                    dataType: 'json',
                    success: function(response){
                        $('.console').html(response);
                    }
                });
            }, 500);
        });
    </script>
</head>

<body>
    <nav class='col-md-12'>
        <ul class='col-md-12'>
            <li class='col-md-1'>
                <img src='images/logo.png' />
            </li>
            <li class='col-md-3'>
                <h2>Ardu Security</h2>
                <p>Secure, Affordable, and low-energy use.</p>
            </li>
        </ul>
    </nav>
    <section class='col-md-6 text-center'>
        <h1 id=''>System is off</h1>
        <button action='/?ON' class='btn btn-primary'>Arm the system</button>
        <button action='/?PLAY' class='btn btn-default'>Play Mario Theme Song</button>
    </section>
    <aside class='col-md-6'>
        <h4>Console</h4>
        <div class='col-md-12 console'></div>
    </aside>

</body>

</html>";

//echo json_encode($send);
echo phpinfo();
?>