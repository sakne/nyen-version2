const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('../../config.json')
const command = require('../../command')

command(client, 'serverinfo', (message) => {
  const { guild } = message

  const { name, region, memberCount, owner, afkTimeout, roles } = guild
  const icon = guild.iconURL()

  const embed = new Discord.MessageEmbed()
    .setTitle(`"${name}" adlı serverin bilgileri...`)
    .setThumbnail(icon)
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
        name: 'AFK Süresi (dakika)',
        value: afkTimeout / 60,
      }, 
      {
        name: 'Rol sayısı',
        value: guild.roles.cache.size -1,


      }
    )

  message.channel.send(embed)
})

  client.login(config.token)