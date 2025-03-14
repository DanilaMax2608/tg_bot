const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();
const token = '7910973588:AAERFX7wl8kK1j15QogAiKR5q6esS5vSeCA'; // �������� �� ��� �����
const bot = new TelegramBot(token, { polling: true });

// ��������� ����������
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello!');
});

// ��������� ������� /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const message = 'Hello! Click the button to start the game:';

    // �������� inline-���������� � ������� Mini App
    const opts = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Start Game',
                        web_app: { url: 'https://danilamax2608.github.io/Game_Test/' } // �������� �� ��� URL ����
                    }
                ]
            ]
        }
    };

    // �������� ��������� � ������� Mini App
    bot.sendMessage(chatId, message, opts);
});

// ������ ������� �� �����, ��������� � ���������� ���������
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
