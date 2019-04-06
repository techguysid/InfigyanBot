    
const Telegraf = require("telegraf"); // import telegraf lib
const BOT_TOKEN = process.env.BOT_TOKEN
const PORT = process.env.PORT||2000
console.log(BOT_TOKEN)
const bot = new Telegraf(process.env.BOT_TOKEN); // Get the token from the environment variable
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
