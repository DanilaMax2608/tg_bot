const TelegramBot = require('node-telegram-bot-api');
const token = '7910973588:AAERFX7wl8kK1j15QogAiKR5q6esS5vSeCA'; // Replace with your token
const bot = new TelegramBot(token, { polling: true });

// Handle /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const message = 'Hello! Click the button to start the game:';

    // Create inline keyboard with Mini App button
    const opts = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Start Game',
                        web_app: { url: 'https://danilamax2608.github.io/Game_Test/' } // Replace with your game URL
                    }
                ]
            ]
        }
    };

    // Send message with Mini App button
    bot.sendMessage(chatId, message, opts);
});

console.log('Bot is running');
