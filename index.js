const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')
const yardım = require('./Commands/misc/Help.js')
const memes = require('./commands/fun/memes.js')
const cc = require('./commands/basic moderation/clearchannel.js')
const server = require('./commands/basic moderation/server.js')
const status = require('./commands/basic moderation/status.js')
const customanswers = require('./Commands/misc/custom-answers.js')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("HOW TO MAKE A BOT FULL HD DOWNLOAD ", {type: "WATCHING"});
})


client.login(config.token)