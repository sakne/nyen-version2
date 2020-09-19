const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('../../config.json')
const command = require('../../command')

client.on('ready', () => {
  console.log(`Ping command is working...`);

module.exports = {
    commands: 'ping',
    callback: (message, arguments, text, client) => {
      message.reply('Calculating ping...').then((resultMessage) => {
        const ping = resultMessage.createdTimestamp - message.createdTimestamp
  
        resultMessage.edit(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
      })
    },
  }

  client.login(config.token)