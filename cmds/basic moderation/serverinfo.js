const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')

const Discord = require('discord.js')

module.exports = class ServerInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'serverinfo',
            group: 'basic moderation',
            memberName: 'serverinfo',
            description: 'Server hakkındaki bilgileri gösterir.'
        })
    }

    run = async (message) => {
        const { guild } = message

  const { name, region, memberCount, owner, afkTimeout, roles } = guild
  const icon = guild.iconURL()

  const embed = new Discord.MessageEmbed()
    .setTitle(`"${name}" adlı serverin bilgileri...`)
    .setThumbnail(icon)
    .setColor('#EDDD2B')
    .addFields(
      {
        name: 'Bölge',
        value: region,
      },
      {
        name: 'Kullanıcı Sayısı',
        value: memberCount,
      },
      {
        name: 'Server Sahibi',
        value: owner.user.tag,
      },
      {
        name: 'AFK Odasına Atılma Süresi (dakika)',
        value: afkTimeout / 60,
      }, 
      {
        name: 'Rol sayısı',
        value: guild.roles.cache.size -1,
      }, 
    )

  message.channel.send(embed)
    }
}