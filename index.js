
require("dotenv").config();

const Telegraf = require('telegraf')
const express = require('express')
const expressApp = express()

const bot = new Telegraf(process.env.BOT_TOKEN)
const botPort = process.env.PORT||2000
//expressApp.use(bot.webhookCallback('/'))
bot.telegram.setWebhook(process.env.URL)
bot.telegram.startWebhook(process.env.STARTWEBHOOK)


expressApp.listen(process.env.port||3000, () => {
  console.log('Example app listening on port 3000!')
})

expressApp.get('/', (req, res) => {
    res.send('Hello World!')
  })

  expressApp.post('/launchBot', (req, res) => {
    res.send('Hello World!')
  })

  bot.start((ctx) => ctx.reply('Welcome'))
  bot.help((ctx) => ctx.reply('Send me a sticker'))
  bot.on('sticker', (ctx) => ctx.reply('👍'))
  bot.hears('hi', (ctx) => ctx.reply('Hey there'))
  bot.launch()