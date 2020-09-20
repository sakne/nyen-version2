const { Random } = require("something-random-on-discord")
const random = new Random();
const Commando = require('discord.js-commando')

module.exports = class MemeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'shitpost',
            group: 'fun',
            memberName: 'shitpost',
            description: 'Reddit üzerinden meme gönderir'
        })
    }

    run = async (message) => {

        let data = await random.getMeme()
    message.channel.send(data)

    }
}