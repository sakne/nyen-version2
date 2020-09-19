const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('../../config.json')
const command = require('../../command')


if (message.member.hasPermission('ADMINISTRATOR', 'MANAGE_NICKNAMES', 'BAN_MEMBERS')) {
  command(client, 'status', (message) => {
    const content = message.content.replace('*status ', '')
    // "!status hello world" -> "hello world"

    client.user.setPresence({
      activity: {
        name: content,
        type: 0,
      },
    })
  })
}


  client.login(config.token)