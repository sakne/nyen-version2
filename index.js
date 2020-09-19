const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')
const yardım = require('./Commands/misc/Help.js')
const memes = require('./Commands/fun/memes.js')
const cc = require('./Commands/basic moderation/clearchannel.js')
const server = require('./Commands/basic moderation/server.js')
const status = require('./Commands/basic moderation/status.js')
const customanswers = require('./Commands/misc/custom-answers.js')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    var guild = client.guild.fetch.get(client.guilds.fetch);
    var onlineCount = guild.members.fetch.filter(m => m.presence.status === 'online').size
      client.user.setActivity('Toplam ' + onlineCount + ' kişiye hizmet ediyor.' , { type: 'WATCHING' });
})


client.login(config.token)