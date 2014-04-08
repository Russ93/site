<?php
require_once('model/usersModel.php');

$um = new usersModel();

if(isset($_GET['password'])){
	// This is for the login and itsets the session variables
	require_once 'view/users/usersView.php';
	$um->login($_GET['email'],$_GET['password']);
}elseif(isset($_GET['update'])){
	// this is to update the messages
	$um->updateMsg($_GET['id'],$_GET['header'],$_GET['message']);
}elseif(isset($_GET['del'])){
	// this deletes the messages
	$um->delMsg($_GET['del']);
}elseif(isset($_GET['nMsg'])){
	// This is the page for the create message
	include 'view/users/addMsgView.php';
}elseif(isset($_GET['header'])){
	// This creates message
	$um->addMsg($_GET['header'],$_GET['message']);
}elseif(isset($_GET['signout'])){
	// this destroys the session and sends 
	$um->signout();
}elseif(isset($_SESSION['userId'])){
	// this is if you are already logged in it will return your account
	require_once 'view/users/usersView.php';
	account($um->logged($_SESSION['userId']));
}
?>