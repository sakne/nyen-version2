const db = require('quick.db');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = class BotInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'cüzdan',
            group: 'berat albayrak',
            memberName: 'cüzdan',
            description: 'Cüzdandaki paranı gösterir.'
        })
    }

    run = async (message) => {

        const erkek = 'https://cdn.discordapp.com/attachments/542409612251496459/757672979856490648/images.png'
        let user = message.mentions.users.first() || message.author;

        let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
        if(bal === null) bal = 0;

        let embed = new MessageEmbed()
        .setTitle(`${user.username} Adlı kişinin cüzdanı...`) 
        .setColor('#EDDD2B')
        .addFields({
            name: 'Cüzdanındaki mevcut ADinar...\n',
            value: `${bal} Allah Dinarı.`
        })

        message.channel.send(embed)
        
    }
}