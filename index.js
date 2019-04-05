
require("dotenv").config();

const Telegraf = require('telegraf')
const express = require('express')
const expressApp = express()

const bot = new Telegraf(process.env.BOT_TOKEN)
expressApp.use(bot.webhookCallback('/'))
bot.telegram.setWebhook('https://infigyanbot.techguysid.now.sh/launch-bot')



expressApp.listen(process.env.port||3000, () => {
  console.log('Example app listening on port 3000!')
})

expressApp.get('/', (req, res) => {
    res.send('Hello World!')
  })

  expressApp.get('/launch-bot', (req, res) => {
    res.send('Hello World!')
  })

  bot.start((ctx) => ctx.reply('Welcome'))
  bot.help((ctx) => ctx.reply('Send me a sticker'))
  bot.on('sticker', (ctx) => ctx.reply('👍'))
  bot.hears('hi', (ctx) => ctx.reply('Hey there'))
  bot.launch()