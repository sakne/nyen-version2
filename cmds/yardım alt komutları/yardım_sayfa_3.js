const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = class GameInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'yardım_3',
            group: 'misc',
            memberName: 'yardım_3',
            description: 'Döviz Komutlarını gösterir.'
        })
    }

    run = async (message) => {

        const logo = 'https://cdn.discordapp.com/attachments/752241441492959363/756798968213536878/Screenshot_3.png'
        const embed = new MessageEmbed()
        .setTitle('NYEN DÖVİZ KOMUTLARI (Sayfa 3/5)\n⠀⠀⠀ \n')
        .setThumbnail(logo)
        .setFooter('Versiyon 0.0.94', logo)
        .setColor('#EDDD2B')
        .addFields({
            name: ' ⠀⠀⠀ \n_**Euro-Dolar-Sterlin-Ruble Komutları**_',
            value: '◇ | Prefix + euro/sterlin/dolar/ruble -> 4 Para biriminden biri yazılırsa, O anki türk lirasına olan kuru gönderilir. \n Örnek *dolar\n⠀⠀⠀ \n '
        })

        message.channel.send(embed)

    }
}