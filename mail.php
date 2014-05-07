<?php
if(isset($_POST['submit'])) {
	$msg = "<style>*{font-family:sans-serif;}</style>
	Name: $_POST['name']<br />
    Email: $_POST['email']<br />
    Company: $_POST['company']<br />
    <h3>Header: $_POST['header']</h3><br />
	<p>Msg: $_POST['comment']</p>";

	$subject = "Site Message from $_POST['email']";
	mail('russellschlup@gmail.com', $subject, $msg );
	header('location: /');

} else {
	header('location: /');
	exit(0);
}
?>