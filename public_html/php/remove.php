<?php
  $servername = "mysql.hostinger.com.ua";
  $username = "u578669973_firdb";
  $password = "rce15their";
  $dbName = "u578669973_comp";

  if(isset($_POST["id"])) {
    $id = $_POST["id"];
  }
  $conn = new mysqli($servername, $username, $password, $dbName);
  $res = "";
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }
  $sqlPar = "select Parrent from Company where Id=".$id;
  $result = $conn->query($sqlPar);
  if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
          $upId = $row["Parrent"];
      }
  } else {
  }
  $sqlUpd = "UPDATE Company SET Parrent=".$upId." WHERE Parrent=".$id;
  $sqlRem = "DELETE FROM Company WHERE id=".$id;

  if ($conn->query($sqlUpd) === TRUE) {
      $res = $res + "Record update successfully, ";
      if ($conn->query($sqlRem) === TRUE) {
          $res = $res + "Record deleted successfully";
      } else {
          echo "Error deleting record: " . $conn->error;
      }
  } else {
      echo "Error updating record: " . $conn->error;
  }


  echo $res;
  $conn->close();
?>
