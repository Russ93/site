<?php
class publicModel {
	function signup($fName,$lName,$email,$password){
		//instantiates the connection
		global $conn;
		//create the sql statement
		$sql = $conn->prepare("SELECT email from users where email = $email;");
		$sql-> execute();
		$res = $sql->fetchAll(PDO::FETCH_ASSOC);
		if(sizeof($res)==0){
			$stmt = $conn->prepare("insert into users (firstname, lastname, email, password) values(:firstname, :lastname, :email, :password);");
			// hashes the password for storage
			$hashPassword = md5($fName.$password);
			//bound parameters for the sql statement
			$stmt->bindParam(':firstname',$fName);
			$stmt->bindParam(':lastname',$lName);
			$stmt->bindParam(':email',$email);
			$stmt->bindParam(':password',$hashPassword);
			$stmt->execute();
			//header("Location: index.php?controller=users&email=$email&password=$password");
			header("Location: index.php?controller=users&call=true&email=$email&password=$password");
		}else{
			echo 'Sorry a User already Exist with that email';
		}
	}
	function getUsers($name){
		//instantiates the connection
		global $conn;
		// add the sql wild card
		$fName = $name."%";
		//create the sql statement
		$sql = $conn->prepare('SELECT firstname, id FROM users where firstname like :fname order by firstname limit 5;');
		//bound parameters for the sql statement
		$sql->bindParam(':fname',$fName);
		$sql-> execute();
		$result = $sql->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($result);
	}
	function getMessages($userId){
		//instantiates the connection
		global $conn;
		//create the sql statement
		$sql = $conn->prepare('SELECT message.id, concat(firstname," ",lastname) as fullname, header, message ,posted FROM message join users on message.userId = users.id where userId = :userId order by posted limit 5;');
		//bound parameters for the sql statement
		$sql->bindParam(':userId',$userId);
		$sql-> execute();
		$result = $sql->fetchAll(PDO::FETCH_ASSOC);
		return ($result);
	}
}

?>