<?php
session_start();
$conn = new mysqli("localhost", "root", "", "pharmeasy");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows == 1) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        $_SESSION['user'] = $user;
        header("Location: index.html");
        exit();
    } else {
        echo "<script>alert('Wrong password'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('User not found'); window.history.back();</script>";
}

$stmt->close();
$conn->close();
?>
