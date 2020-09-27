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
    .setFooter('Build-in Progress', logo)
    .setColor('#FFE40B')
    .addFields({
      name: '_**Sayfa değiştirme komutu \n **_',
      value: '*yardım [sayfa] -> sayfa değiştirmek için'
    })

    message.channel.send(embed)
}
}