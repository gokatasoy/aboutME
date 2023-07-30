<!-- login PHP -->
<?php
ob_start();
    $yourName = $_POST['yourName'];
    $yourPassword = $_POST['yourPassword'];

    $correct_username = "g211210002@sakarya.edu.tr";
    $correct_password = "g211210002";

    if ($yourName == $correct_username && $yourPassword == $correct_password) {
        echo "Hoşgeldiniz g211210002";
        exit;
    }

        else {
        $error_message = "Hatali kullanici veya parola girdiniz.";
        header("Refresh: 3; url=login.html");
        exit;
    }

?>