    
const Telegraf = require("telegraf"); // import telegraf lib
const BOT_TOKEN = process.env.BOT_TOKEN
const PORT = process.env.PORT||2000
console.log(BOT_TOKEN)
const bot = new Telegraf(process.env.BOT_TOKEN); // Get the token from the environment variable
bot.start((ctx) => ctx.reply('Welcome '+ctx.from.first_name+'! Stay Motivated! Happy Learning.'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey '+
ctx.from.first_name+'! How may I help you today?\n You can give me following commands:\n'+
'1. /sports\-awards - To help you with the list of awardees in the field of sports\n'+
'2. /literature\-awards - To help you with list of awardees in the field of literature.'))
bot.launch()
bot.command('sports',(ctx) => ctx.reply('I can tell you about Arjuna Awards.'))