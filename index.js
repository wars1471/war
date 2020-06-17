index.js

const TelegramBot = require('node-telegram-bot-api')
const os = require('os')


const bot = new TelegramBot('1178634013:AAFDln_tyNHgOr7qv3zPn63OFPnVYNUzzuo', {pollings: true})

bot.on('message', msg => {

  bot.sendMessage(msg.chat.id, 'Hello from ${os.type()}, bot says hi to "${msg.from.first_name}"')
})