const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')
const logo = 'https://cdn.discordapp.com/attachments/752241441492959363/756798968213536878/Screenshot_3.png'


module.exports = class InfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'yardım',
            group: 'misc',
            memberName: 'yardım',
            description: 'Nyen botunun komutlarını gösterir.'
        })
    }

    run = async (message) => {


        const embed = new MessageEmbed()
    .setTitle('NYEN KOMUTLARI (sayfa 1/5)')
    .setAuthor(message.author.username, message.author.displayAvatarURL()) 
    .setThumbnail(logo) 
    .setFooter('Version 0.0.94', logo)
    .setColor('#FFE40B')
    .addFields({
      name: ' ⠀⠀⠀ \n_**Sayfa değiştirme komutu **_',
      value: '◇ | Prefix + yardım_[sayfa] -> sayfa değiştirmek için\n⠀⠀⠀ \n **!!** Normal Prefix *(yıldız) dır. Serverde özel prefix varsa *serverinfo bölümünden görebilirsiniz.\n⠀⠀⠀ \n **Sayfa 2 ->** Oyun Komutları \n **Sayfa 3 ->** Döviz Komutları \n **Sayfa 4 ->** \n **Sayfa 5 ->** \n⠀⠀⠀ \n '
    })

    message.channel.send(embed)
}
}