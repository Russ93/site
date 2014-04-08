<?php
function account($obj){
	$strang = "
	<div id='pop'>
	</div>
	<header class='col-md-12'>
		<a href='./?signout=true&call=true'><button class='col-md-1 col-md-offset-11 btn btn-primary' id='signout'>Sign Out</button></a>
		<h2>".$_SESSION['name']."</h2>
		<button id='create' class='col-md-2 btn btn-primary'>Create New Message</button>
	</header>
	<ul class='col-md-8 col-md-offset-2'>";
	// Php only Button -- <a href='./?controller=users&nMsg=new'><button class='col-md-2 btn btn-primary'>Create New Message</button></a>
	foreach ($obj as $num => $msg) {
		$strang = $strang."
		<li class='col-md-12 highlight' msgId=".$obj[$num]['id']." >
			<button class='edit btn btn-default'>Edit</button>
			<h3 class='col-md-9'>".$obj[$num]['header']."</h3>
			<time class='col-md-9' datetime='2009-11-13'>Posted on: ".$obj[$num]['posted']."</time>
			<p class='col-md-12'>".$obj[$num]['message']."</p>
		</li>";
	}
	$strang = $strang."
	</ul>";

	echo $strang;
};
?>