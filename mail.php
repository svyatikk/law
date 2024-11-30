<?php
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
// $email = $_POST['user_email'];

$mail->SMTPDebug = 0; // Установите на 3 для отладки

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'svyatoslavgolovin12@gmail.com';
$mail->Password = 'slbj idjh hkjq tkos'; // Используйте пароль приложения
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->setFrom('svyatoslavgolovin12@gmail.com', "Пользователь {$name} оставил заявку");
$mail->addAddress('svvetek@yandex.ru');

$mail->isHTML(true);
$mail->Subject = 'Заявка на консультацию';
$mail->Body    = "{$name} оставил заявку, его телефон {$phone}";

if (!$mail->send()) {
    echo json_encode(['success' => false, 'message' => $mail->ErrorInfo]);
} else {
    echo json_encode(['success' => true, 'message' => 'Ваше сообщение успешно отправлено!']);
}
