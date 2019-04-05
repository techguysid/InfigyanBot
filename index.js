
require("dotenv").config();

const Telegraf = require('telegraf')
const express = require('express')
const expressApp = express()

const bot = new Telegraf(process.env.BOT_TOKEN)
const botPort = process.env.PORT||2000
//expressApp.use(bot.webhookCallback('/'))
bot.telegram.setWebhook(process.env.URL)
bot.telegram.startWebhook(process.env.STARTWEBHOOK,null,botPort)

  bot.start((ctx) => ctx.reply('Welcome'))
  bot.help((ctx) => ctx.reply('Send me a sticker'))
  bot.on('sticker', (ctx) => ctx.reply('👍'))
  bot.hears('hi', (ctx) => ctx.reply('Hey there'))
  bot.launch()