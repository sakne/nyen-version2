const db = require('quick.db');
const Discord = require('discord.js');
const ms = require('parse-ms');
const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = class BotInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'çalış',
            group: 'berat albayrak',
            memberName: 'çalış',
            description: 'Vergi kaçırırsın.'
        })
    }

    run = async (message) => {
        let user = message.author;
        let timeout = 600000;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`Şuan bütün vergileri kaçırdın. **${time.minutes} dakika**, **${time.seconds} saniye** sonra tekrar dene.`)
        } else {
            let amount = Math.floor(Math.random() * 2500) + 1;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

            let embed = new MessageEmbed()
        .setTitle(`BAŞARILI !!`) 
        .setColor('#00FF04')
        .setDescription(`${user}, vergileri kaçırdın ve **${amount} Allah Dinarı** kazandın.`)

        message.channel.send(embed)
    }
}
}