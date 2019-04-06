    
const Telegraf = require("telegraf"); // import telegraf lib
const Markup = require("telegraf/markup");
const BOT_TOKEN = process.env.BOT_TOKEN
const PORT = process.env.PORT||2000
console.log(BOT_TOKEN)
const bot = new Telegraf(process.env.BOT_TOKEN); // Get the token from the environment variable
bot.start((ctx) => ctx.reply('Welcome '+ctx.from.first_name+'! Stay Motivated! Happy Learning.'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey '+
ctx.from.first_name+'! How may I help you today?\n You can give me following commands:\n'+
'1. /awards/sports - To help you with the list of awardeesin the field of sports\n'+
'2. /awards/literature - To help you with list of awardees in the field of literature.'+
'3. /awards/nationalhonors - To help you with the list of receipents of Indian National Honorsa like Bharat Ratna etc.\n'+
'4. /awards/music - To help you with list of awardees in the field of literature.\n'+
'5. /internationalOrganizations - To help you with the list of all the international organizations,their HQs and members\n'+
'6. /importantDaysOfTheCalender - List of all days of national or international importance'))
bot.launch()
bot.command('/awards/sports',(ctx) => ctx.reply('Please select the award category to proceed :\n'+
'1. /awards/sports/dronacharya - List of Dronacharya Awardees\n'+
'2. /awards/sports/rajivgandhikhelratna - List of Rajiv Gandhi Khel Ratna Awardees\n'+
'3. /awards/sports/arjuna - List of Arjuna Awardees\n'+
'4. /awards/sports/dhyanchand - List of Dhyan Chand Awardees'))

bot.command('awards/sports/dronacharya',(ctx) => ctx.replyWithHTML('<b>Subedar C.A.Kuttappa</b>-<b>Boxing</b><i>Subedar ban ke boxing karne lage</i>\n'))
