<?php
  $servername = "mysql.hostinger.com.ua";
  $username = "u578669973_firdb";
  $password = "rce15their";
  $dbName = "u578669973_comp";

if(isset($_POST["data"])) {
  $val = $_POST["data"];
}
$conn = new mysqli($servername, $username, $password, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "select * from Company";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo $row["Id"]. ":" . $row["Name"]. ":" . $row["EAE"]. ":" . $row["Parrent"]. "||";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
