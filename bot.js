const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();
const token = '7910973588:AAERFX7wl8kK1j15QogAiKR5q6esS5vSeCA'; // Замените на ваш токен
const bot = new TelegramBot(token, { polling: true });

// Обработка обновлений
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello!');
});

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const message = 'Hello! Click the button to start the game:';

    // Создание inline-клавиатуры с кнопкой Mini App
    const opts = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Start Game',
                        web_app: { url: 'https://danilamax2608.github.io/Game_Test/' } // Замените на ваш URL игры
                    }
                ]
            ]
        }
    };

    // Отправка сообщения с кнопкой Mini App
    bot.sendMessage(chatId, message, opts);
});

// Запуск сервера на порту, указанном в переменной окружения
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
