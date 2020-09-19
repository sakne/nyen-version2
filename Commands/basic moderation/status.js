const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('../../config.json')
const command = require('../../command')



command(client, 'status', (message) => {
  if(message.member.hasPermission('ADMINISTRATOR')) {
    const content = message.content.replace('*status ', '')

    client.user.setPresence({
      activity: {
        name: content,
        type: 0,
      }
    })
  }
      
       

  client.login(config.token)