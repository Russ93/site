<?php
function msg($obj){
	if(sizeof($obj)>=1){
		$strang = "
	<h2>".$obj[0]['fullname']."</h2>
	<ul class='col-md-8 col-md-offset-2'>";
		foreach ($obj as $num => $msg) {
			$strang = $strang."
		<li class='col-md-12' msgId=".$obj[$num]['id']." >
			<h3 class='col-md-9'>".$obj[$num]['header']."</h3>
			<time class='col-md-3' datetime='2009-11-13'>".$obj[$num]['posted']."</time>
			<p class='col-md-12'>".$obj[$num]['message']."</p>
		</li>";
		}
		$strang = $strang."
	</ul>";
	}else{
		$strang = "<section class='col-md-12'><p>This user hasn't written anything yet</p></section>";
	}
	echo $strang;
};
?>