    
const Telegraf = require("telegraf"); // import telegraf lib
const Markup = require("telegraf/markup");
const awards_partials = require('./text_partials/awards.json')
const BOT_TOKEN = process.env.BOT_TOKEN
const PORT = process.env.PORT||2000
console.log(BOT_TOKEN)
const bot = new Telegraf(process.env.BOT_TOKEN); // Get the token from the environment variable
bot.start((ctx) => ctx.reply('Welcome '+ctx.from.first_name+'! Stay Motivated! Happy Learning.'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey '+
ctx.from.first_name+'! How may I help you today?\n You can give me following commands:\n'+
'1. /awards_sports - To help you with the list of awardeesin the field of sports\n'+
'2. /awards_literature - To help you with list of awardees in the field of literature.\n'+
'3. /awards_nationalhonors - To help you with the list of receipents of Indian National Honorsa like Bharat Ratna etc.\n'+
'4. /awards_music - To help you with list of awardees in the field of literature.\n'+
'5. /international_organizations - To help you with the list of all the international organizations,their HQs and members\n'+
'6. /important_days_of_the_calender - List of all days of national or international importance'))
bot.launch()
bot.command('/awards_sports',(ctx) => ctx.reply('Please select the award category to proceed :\n'+
'1. /awards_sports_dronacharya_2018 - List of Dronacharya Awardees for the year 2018\n'+
'2. /awards_sports_rajivgandhikhelratna_2018 - List of Rajiv Gandhi Khel Ratna Awardees for the year 2018\n'+
'3. /awards_sports_arjuna_2018 - List of Arjuna Awardees for the year 2018\n'+
'4. /awards_sports_dhyanchand_2018 - List of Dhyan Chand Awardees for the year 2018'))

bot.command('awards_sports_dronacharya_2018',(ctx) => ctx.replyWithHTML(awards_partials.awards_sports_dronacharya_2018.join()))
bot.command('awards_sports_rajivgandhikhelratna_2018',(ctx) => ctx.replyWithHTML(awards_partials.awards_sports_rajivgandhikhelratna_2018))
bot.command('awards_sports_arjuna_2018',(ctx) => ctx.replyWithHTML(awards_partials.awards_sports_arjuna_2018.join()))
bot.command('awards_sports_dhyanchand_2018',(ctx) => ctx.replyWithHTML(awards_partials.awards_sports_dhyanchand_2018.join()))