const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')
const { version } = require('../../package.json')

module.exports = class BotInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'botinfo',
            group: 'misc',
            memberName: 'botinfo',
            description: 'Bot bilgilerini gösterir'
        })
    }


    run = async (message) => {

        let totalMembers = 0

        for (const guild of this.client.guilds.cache) {
            totalMembers += (await guild [1].members.fetch()).size
        }
        const embed = new MessageEmbed()
        .setColor('#EDDD2B')
        .setFooter('Build-in Progress')
        .setThumbnail(this.client.user.displayAvatarURL())
        .setAuthor(`Nyen V2 botu hakkında bilgi verir.`)
        .addFields({
            name: 'Botun İsmi',
            value: this.client.user.tag
        }, 
        {
            name: 'Versionu',
            value: version
        }, 
        {
            name: "Serverin Komut Prefixi",
            value: message.guild.commandPrefix

        }, 
        {
            name: '🕒En Son Yeniden Başlatmanın Üzerinden Geçen Süre',
            value: `${process.uptime().toFixed(2)} saniye`

        }, 
        {
            name: '🌐Bulunduğu Sunucunun sayısı',
            value: this.client.guilds.cache.size

        }, 
        {
            name: '👥Toplam Kullanıcı',
            value: totalMembers

        },
        {
            name: '⏳Ping',
            value: `${Math.round(this.client.ws.ping)}ms`,
            inline: true
        }, 
        {
            name: 'Botun Yapımcısı',
            value: 'SAKNΞ#6996'
            
        })

    message.channel.send(embed)

    }
}