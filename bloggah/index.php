<?php
session_start();

$conn = new PDO('mysql:host=localhost;dbname=twitter;port=3306', 'root', 'root');

//$_GET['call'] is for calls to the server insted of getting information
// this is so no header information is passed through
if(!isset($_GET['call'])){
	include 'view/public/head.html';
}

// Determines which controller to use
if(isset($_GET['controller'])){
	$controller=trim($_GET['controller']);
}elseif(isset($_SESSION['userId'])){
	$controller='users';
}else {
	$controller="public";
}

// implements the controller selected above
if (file_exists("controller/".$controller."Controller.php")) {
	include("controller/".$controller."Controller.php");
} else {
	include('404.php');
}

//$_GET['call'] is for calls to the server insted of getting information
// this is so no header information is passed through
if(!isset($_GET['call'])){
	echo '
	</body>
</html>';
}
?>