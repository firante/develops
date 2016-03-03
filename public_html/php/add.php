<?php
  $servername = "mysql.hostinger.com.ua";
  $username = "u578669973_firdb";
  $password = "rce15their";
  $dbName = "u578669973_comp";

  if(isset($_POST["id"]) && isset($_POST["count"])) {
    $id = $_POST["id"];
    $count = $_POST["count"];
  }
  $conn = new mysqli($servername, $username, $password, $dbName);
  $res = "";
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  $sqlIns = "INSERT INTO Company(Id, Name, EAE, Parrent) VALUES (".$count.", '', 0, ".$id.")";
  if ($conn->query($sqlIns) === TRUE) {
      echo "Record Insert successfully, ";
  } else {
      echo "Error Insert record: " . $conn->error;
  }


  echo $res;
  $conn->close();
?>
