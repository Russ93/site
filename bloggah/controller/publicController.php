<?php
// for the search box
require_once('model/publicModel.php');

//create an instance of publicModel as pm
$pm = new publicModel();

if(isset($_GET['fname'])){
	// This is for the sign up
	// passes thier firstname, lastname, email, and password
	$pm->signup($_GET['fname'],$_GET['lname'],$_GET['email'],$_GET['password']);
}elseif(isset($_GET['getUsers'])){
	// This is for the search bar
	$pm->getUsers($_GET['name']);
}elseif(isset($_GET['userId'])){
	// this gets the messages and returns it to the public model
	require_once 'view/public/showMsgView.php';
	//passes the id of the user to get thier messages $pm->getMessages($conn,$_GET['userId']);
	//msg() is the view for the messages
	msg($pm->getMessages($_GET['userId']));
}else{
	// default home sign up page
	include('view/public/homeView.html');
}

?>