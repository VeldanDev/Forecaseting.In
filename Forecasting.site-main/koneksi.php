<?php

$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "dbforecasting"; 


$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Cek koneksi
if ($conn) {
    echo "Koneksi berhasil!";
} else {
    echo "Koneksi gagal: " . mysqli_connect_error();
}


// Cek apakah form telah disubmit
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['inputUsername']; // Mengambil username dari form
    $email = $_POST['inputEmail']; // Mengambil email dari form
    $password = password_hash($_POST['inputPassword'], PASSWORD_DEFAULT); // Hash password

    // Siapkan dan bind
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $password);

    // Eksekusi statement
    if ($stmt->execute()) {
        echo "Registration successful!";
        // Redirect ke halaman login atau halaman lain
        header("Location: login.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    // Tutup statement
    $stmt->close();
}



// Tutup koneksi
$conn->close();
?>