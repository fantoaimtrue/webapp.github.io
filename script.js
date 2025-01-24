document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp; // Получаем объект WebApp
    tg.expand(); // Разворачиваем на весь экран

    // Получаем информацию о пользователе
    const user = tg.initDataUnsafe?.user;
    if (user) {
        document.getElementById("username").textContent = user.first_name;
        document.getElementById("userid").textContent = `ID: ${user.id}`;
    }

    // Обработчик кнопки
    document.getElementById("sendData").addEventListener("click", () => {
        const data = {
            message: "Привет от WebApp!",
            user_id: user ? user.id : "неизвестно"
        };

        tg.sendData(JSON.stringify(data)); // Отправляем данные боту
        tg.close(); // Закрываем WebApp после отправки
    });
});
