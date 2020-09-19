const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = class UserInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'kbilgi',
            group: 'misc',
            memberName: 'userbilgi',
            description: 'Kullanıcı hakkında bilgi gösterir.'
        })
    }

    run = async (message) => {
        const { guild, channel } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)

        const embed = new MessageEmbed()
         .setAuthor(`${user.username} hakkında kullanıcı bilgiler...`, 
         user.displayAvatarURL()
         ).addFields({
             name: 'Kullanıcı Etiketi',
             value: user.tag
         }, 
         {
             name: 'Bot mu?',
             value: user.bot

         }, 
         {
             name: 'Nickname',
             value: member.nickname || 'Yok'

         }, 
         {
             name: 'Servere Katıldığı Tarih',
             value: new Date(member.joinedTimestamp).toLocaleDateString(),

         },
         {
             name: 'Discorda katıldığı tarih',
             value: new Date(user.createdTimestamp).toLocaleDateString(),

         })

         message.channel.send(embed)


    }
}