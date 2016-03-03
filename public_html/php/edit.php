<?php
  $servername = "mysql.hostinger.com.ua";
  $username = "u578669973_firdb";
  $password = "rce15their";
  $dbName = "u578669973_comp";

  if(isset($_POST["id"]) && isset($_POST["name"]) && isset($_POST["eae"])) {
    $id = $_POST["id"];
    $name = $_POST["name"];
    $eae = $_POST["eae"];
  }
  $conn = new mysqli($servername, $username, $password, $dbName);
  $res = "";
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  $sqlUpd = "UPDATE Company SET Name='".$name."', EAE=".$eae."  WHERE Id=".$id;
  if ($conn->query($sqlUpd) === TRUE) {
      echo "Record update successfully, ";
  } else {
      echo "Error updating record: " . $conn->error;
  }


  echo $res;
  $conn->close();
?>
