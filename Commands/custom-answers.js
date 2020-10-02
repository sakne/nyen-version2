const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('../config.json')

client.on('message', msg => {
    if (msg.content == 'drama') {
      msg.channel.send('Dramayı bırakın lan')
      msg.channel.send('https://cdn.discordapp.com/attachments/542409612251496459/756447231581618336/54106757.png')
    }
});
    client.login(config.token);