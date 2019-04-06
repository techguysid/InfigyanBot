    
const Telegraf = require("telegraf"); // import telegraf lib
const BOT_TOKEN = process.env.BOT_TOKEN
const PORT = process.env.PORT||2000
console.log(BOT_TOKEN)
const bot = new Telegraf(process.env.BOT_TOKEN); // Get the token from the environment variable
const URL = process.env.
bot.telegram.setWebhook(`${URL}bot${BOT_TOKEN}`);
bot.telegram.startWebhook(`/bot${BOT_TOKEN}`,null, PORT)
// Start Bot
bot.start(ctx => {
  ctx.reply(
    `How can I help you, ${ctx.from.first_name}?`
  );
});
