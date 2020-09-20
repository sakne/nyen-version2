const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = class GameInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'oyardım',
            group: 'misc',
            memberName: 'oyardım',
            description: 'Oyun komutları hakkında bilgi gösterir'
        })
    }

    run = async (message) => {

        const logo = 'https://cdn.discordapp.com/attachments/752241441492959363/756798968213536878/Screenshot_3.png'
        const embed = new MessageEmbed()
        .setTitle('NYEN **OYUN** KOMUTLARI')
        .setThumbnail(logo)
        .setFooter('Build-in Progress')
        .setColor('#EDDD2B')
        .addFields({
            name: '**HIZLI YAZMA OYUNU**',
            value: '**Nasıl Oynanır?** ||| *hyazma yazdıktan sonra gelen kelimeleri en ilk yazan puan alır. En çok puan alan kişi 1. olur. Toplam 120 saniye sonra biter. Sonuçlar gösterilir. (Sadece kullanıcıyı taşıma yetkisi olanalar kullanabilir.)',
            inline: false
        }, 
        {

        },
        {
            name: '**YAPIM AŞAMASINDA...**',
            value: '**YAPIM AŞAMASINDA...**',
            inline: false

        })

        message.channel.send(embed)

    }
}