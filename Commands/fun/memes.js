const discord = require("discord.js")
const client = new discord.Client()
const { Random } = require("something-random-on-discord")
const config = require('../../config.json');
const random = new Random();

var prefix = config.prefix;
var token = config.token


client.on("message", async message => {
  if(message.content === "*shitpost") {
    let data = await random.getMeme()
    message.channel.send(data)
  }
})


client.login(token);