<?php
// VERSIÓN CON GMAIL SMTP - Para servidores sin correo configurado
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// ===== CONFIGURACIÓN =====
 $tu_email = 'ahfseguridad@gmail.com'; // ← Tu Gmail
 $tu_password_app = 'swvyvoeacyrovrsf'; // ← La que generaste
// ========================

// Cargar PHPMailer (necesitas subir la carpeta PHPMailer)
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

// Obtener datos kk
 $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
 $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
 $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
 $company = filter_input(INPUT_POST, 'company', FILTER_SANITIZE_STRING);
 $service = filter_input(INPUT_POST, 'service', FILTER_SANITIZE_STRING);
 $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

// Validación
if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Completa los campos obligatorios']);
    exit;
}

// Mapeo de servicios
 $service_labels = [
    'emergency' => '☢️ Emergencia Ransomware',
    'prevention' => '🛡️ Prevención y Protección',
    'recovery' => '💾 Recuperación de Datos',
    'audit' => '📋 Auditoría de Seguridad',
    'training' => '👥 Capacitación',
    'consulting' => '💼 Consultoría'
];

 $service_label = $service_labels[$service] ?? $service;

try {
    $mail = new PHPMailer(true);
    
    // Configuración SMTP de Gmail
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $tu_email;
    $mail->Password = $tu_password_app;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->CharSet = 'UTF-8';
    
    // Configurar email
    $mail->setFrom($tu_email, 'Formulario Nex-Sentinel');
    $mail->addAddress($tu_email);
    $mail->addReplyTo($email, $name);
    
    $mail->Subject = "🚨 NUEVO CLIENTE - $service_label - $name";
    $mail->isHTML(false); // Texto plano para mejor entrega
    
    $cuerpo = "
NUEVA SOLICITUD RECIBIDA
========================

Nombre: $name
Email: $email
Teléfono: $phone
Empresa: $company
Servicio: $service_label

Mensaje:
 $message

Fecha: " . date('d/m/Y H:i:s');
    
    $mail->Body = $cuerpo;
    $mail->send();
    
    echo json_encode(['success' => true, 'message' => '¡Solicitud enviada! Te contactaremos pronto.']);
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false, 
        'message' => 'Error al enviar: ' . $mail->ErrorInfo
    ]);
}
?>