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

        let status;
        switch (user.presence.status) {
            case "online":
                status = "🟢 Çevrimiçi";
                break;
            case "dnd":
                status = "⛔ Rahatsız Etmeyin";
                break;
            case "idle":
                status = "🌙 Boşta";
                break;
            case "offline":
                status = "⚫ Çevrimdışı";
                break;
        }

        const embed = new MessageEmbed()
        .setColor('#EDDD2B')
        .setFooter('Build-in Progress')
         .setThumbnail(user.displayAvatarURL())
         .setTitle(`${user.username} hakkında kullanıcı bilgiler...`
         ).addFields({
             name: 'Kullanıcı İsmi',
             value: user.username
         }, 
         {
             name: '#️⃣ Kullanıcı Etiketi',
             value: user.discriminator,

         },
         {
             name: 'Bot mu',
             value: user.bot

         }, 
         {
             name: 'Serverdeki İsmi',
             value: member.nickname || 'Değiştirilmemiş'

         }, 
         {
             name: '📆 Servere Katıldığı Tarih',
             value: new Date(member.joinedTimestamp).toLocaleDateString(),
             inline: true

         },
         {
             name: '📆 Discorda Katıldığı Tarih',
             value: new Date(user.createdTimestamp).toLocaleDateString(),
             inline: true

         }, 
         {
             name: 'Şu Anki Durumu',
             value: status,
             inline: true

         },
         {
             name: 'Aktivite',
             value: user.presence.activities[0] ? user.presence.activities[0].name : `Kullanıcı herhangi bir oyun oynamıyor!`,
             inline: true

         },
         {
             name: 'Avatar Linki (Gif Olmayan)',
             value: `[Buraya Tıklayın](${user.displayAvatarURL()})`

         })

         message.channel.send(embed)


    }
}