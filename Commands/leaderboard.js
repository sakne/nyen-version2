const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: "zenginler",
    description: "Serverin en zenginlerini gösterir",

    async run (client, message, args) {

        const { guild } = message
        
        let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data' })

        let content = "";
        for (let i = 0; i < money.length; i++){
            let user = client.users.cache.get(money[i].ID.split('_')[2]).tag

            content += `**${i+1}**. ${user} • 💵 ${money[i].data} \n`

        }

        const { name, region, memberCount, owner, afkTimeout, roles } = guild
        const icon = guild.iconURL()


        const user = message.mentions.users.first() || message.member.user

        const embed = new Discord.MessageEmbed()
        .setTitle(`_**${message.guild.name} Adlı Serverin En Zenginleri...**_ `)
        .setDescription(`╭–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––╮\n \n ${content}\n╰–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––╯`)
        .setAuthor(name, icon)
        .setTimestamp()
        .setColor("#EDDD2B")

        message.channel.send(embed)
    }
}