// Fecha de inicio y fin del mandato ficticio de Tony
const startDate = new Date('August 7, 2022 00:00:00 GMT');
const endDate = new Date('August 7, 2026 00:00:00 GMT');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("years").innerText = formatTime(years);
    document.getElementById("months").innerText = formatTime(months);
    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Función para donar (simulada)
function donate() {
    alert("¡Gracias por tu donación!");
}

// Función para enviar comentarios (simulada)
function submitComment() {
    const comment = document.getElementById("comment").value;
    if (comment.trim() !== "") {
        alert("¡Comentario enviado con éxito!");
        document.getElementById("comment").value = "";
    } else {
        alert("Por favor, escribe un comentario antes de enviar.");
    }
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);

// Ejecutar la función de actualización inicialmente
updateCountdown();
// Función para suscribirse a actualizaciones diarias
function subscribe() {
    const email = document.getElementById("email").value;
    if (validateEmail(email)) {
        alert("¡Gracias por suscribirte a las actualizaciones diarias! Te mantendremos informado.");
        // Aquí puedes agregar la lógica para enviar actualizaciones diarias al correo electrónico del suscriptor
        // Por ejemplo, puedes usar un servicio de correo electrónico como SendGrid o Mailchimp para enviar correos automáticamente.
    } else {
        alert("Por favor, ingresa un correo electrónico válido.");
    }
}

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
// Función para suscribirse
function subscribe() {
    const email = prompt("Por favor, ingresa tu dirección de correo electrónico:");
    if (email) {
        // Lógica para enviar el correo electrónico con la actualización diaria
        sendDailyUpdate(email);
    }
}

// Función para enviar la actualización diaria por correo electrónico
function sendDailyUpdate(email) {
    // Lógica para enviar el correo electrónico
    // Esto dependerá de la plataforma de envío de correo electrónico que estés utilizando
    // Puedes utilizar Nodemailer si estás utilizando un servidor Node.js o una API de terceros como SendGrid o Mailchimp
    // Aquí hay un ejemplo de cómo podría ser la lógica con Nodemailer (se necesita configurar un servidor SMTP):
    /*
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tu_correo@gmail.com',
            pass: 'tu_contraseña'
        }
    });
    const mailOptions = {
        from: 'tu_correo@gmail.com',
        to: email,
        subject: 'Actualización diaria - FueraTony.com',
        text: `¡Hola! Aquí está tu actualización diaria del tiempo restante en el mandato del presidente Tony:
               Años: ${document.getElementById("years").innerText}
               Meses: ${document.getElementById("months").innerText}
               Días: ${document.getElementById("days").innerText}
               Horas: ${document.getElementById("hours").innerText}
               Minutos: ${document.getElementById("minutes").innerText}
               Segundos: ${document.getElementById("seconds").innerText}`
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Correo electrónico enviado: ' + info.response);
            alert("¡Suscripción exitosa! Recibirás actualizaciones diarias en tu correo electrónico.");
        }
    });
    */
    // Aquí se mostraría una alerta para simular el envío exitoso del correo electrónico
    alert("¡Suscripción exitosa! Recibirás actualizaciones diarias en tu correo electrónico.");
}