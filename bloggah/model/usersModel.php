<?php
class usersModel{

	function login($email,$password){
		//instantiates the connection
		global $conn;
		$sql = $conn->prepare('SELECT id, email, firstname, lastname, password from users where email = "'.$email.'";');
		$sql-> execute();
		$res = $sql->fetchAll(PDO::FETCH_ASSOC);
		if(md5($res[0]['firstname'].$password)==$res[0]['password']){
			$fullname = $res[0]['firstname'].' '.$res[0]['lastname'];
			//sets the session variables
			$_SESSION['userId'] = $res[0]['id'];
			$_SESSION['name'] = $fullname;
			//clears the url
			header('Location: index.php');
		}else{
			return 'Incorrect password or username';
		}
	}

	function logged($userId){
		//instantiates the connection
		global $conn;
		//create the sql statement
		$msgSql = $conn->prepare("SELECT message.id,concat(firstname,' ',lastname) as fullname,header,message,posted from message join users on message.userId = users.id where userId = $userId;");
		$msgSql-> execute();
		$msg = $msgSql->fetchAll(PDO::FETCH_ASSOC);
		return $msg;
	}

	function addMsg($header,$message){
		//instantiates the connection
		global $conn;
		//create the sql statement
		$stmt = $conn->prepare("insert into message (userId, header, message, posted) values(:userId, :header, :message, now());");
		//bound parameters for the sql statement
		$stmt->bindParam(':userId',$_SESSION['userId']);
		$stmt->bindParam('header', $header);
		$stmt->bindParam(':message',$message);
		$stmt->execute();
		//clears the url
		header('Location: index.php');
	}
	function delMsg($id){
		//instantiates the connection
		global $conn;
		//create the sql statement
		$stmt = $conn->prepare("delete from message where id = :id");
		//bound parameters for the sql statement
		$stmt->bindParam(':id',$id);
		$stmt->execute();
		header('Location: index.php');
	}
	function updateMsg($id,$header,$message){
		//instantiates the connection
		global $conn;
		//create the sql statement
		$stmt = $conn->prepare("update message set header = :header where id = :id; update message set message = :message where id = :id; update message set posted = now() where id = :id;");
		//bound parameters for the sql statement
		$stmt->bindParam(':header',$header);
		$stmt->bindParam(':message',$message);
		$stmt->bindParam(':id',$id);
		$stmt->execute();
		header('Location: index.php');
	}

	function signOut(){
		session_destroy();
		header('Location: index.php');
	}

}

?>