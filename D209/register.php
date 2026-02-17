<?php

$conn = new mysqli("localhost", "root", "kotlin2025", "pharmeasy");


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$name = $_POST['name'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$password = $_POST['password'];

$check = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($check);
if ($result->num_rows > 0) {
    echo "Email already registered.";
    exit;
}


$password = md5($password); 
$sql = "INSERT INTO users (name, gender, email, password) VALUES ('$name', '$gender', '$email', '$password')";
if ($conn->query($sql)) {
    echo "Registration successful. <a href='login.html'>Login here</a>";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
