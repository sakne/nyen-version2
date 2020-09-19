const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('../../config.json')
const command = require('../../command')

command(client, ['cc', 'clearchannel'], (message) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.messages.fetch().then((results) => {
        message.channel.bulkDelete(results)
      })
    }
  })

  client.login(config.token)