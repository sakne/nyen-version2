const db = require('quick.db');
const ms = require('parse-ms');
const Commando = require('discord.js-commando');
const { MessageEmbed } = require('discord.js')

module.exports = class BotInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'vergiler',
            group: 'berat albayrak',
            memberName: 'vergiler',
            description: 'Cüzdandaki paranı gösterir.'
        })
    }

    run = async (message) => {

        const numbers = Math.floor(Math.random() * 45000) + 1500

       let user = message.author;
        let timeout = 21600000;
        let amount = numbers

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));

            let embed = new MessageEmbed()
        .setTitle(`Zaten Vergini Topladın (albayrak) `) 
        .setDescription(`**${time.days}** Gün, **${time.hours}** Saat, **${time.minutes}** Dakika, **${time.seconds}** Saniye sonra yeniden toplayabilirsin.`)
        .setColor('RED')

            return message.channel.send(embed)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

            let embed = new MessageEmbed()
        .setTitle(`BAŞARILI !!`) 
        .setColor('#00FF04')
        .setDescription(`Başarılı bir şekilde **${amount} Allah Dinarı** miktarında vergi topladın !!`)

        message.channel.send(embed)
    }
}
}
