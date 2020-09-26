const db = require('quick.db');
const Discord = require('discord.js');
const { MessageEmbed } =require('discord.js');

module.exports = {
    name: "varlıklar",
    description: "Varlıklarını gösterir.",


    async run (client, message, args) {
        let items = await db.fetch(message.author.id);
        if(items === null) items = "Burasi bos"

        const Embed = new Discord.MessageEmbed()
        .addField('__**Liste...**__ \n', items)
        .setTitle('VARLIKLARIN')
        .setDescription('Sahip olduğun eşyaların listesini aşşağıda bulabilirsin.')
        .setColor('#EDDD2B')

        message.channel.send(Embed);
    }
}