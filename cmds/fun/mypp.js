const Commando = require('discord.js-commando');
const { MessageEmbed } = require("discord.js");

module.exports = class MemeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'peepee',
            group: 'fun',
            memberName: 'peepee',
            description: 'Yazan kişinin pp uzunluğunu gösterir.'
        })
    }

 run = async (message) =>{
     let cevaplar = [
        "yok",
        "8=D",
        "8==D",
        "8===D",
        "8====D",
        "8=====D",
        "8======D",
        "8=======D",
        "8========D",
        "8=========D",
        "8==========D",
        "8===========D",
        "8============D",
        "8=============D",
        "8==============D",
        "8===============D",
     ]

     let cevap = cevaplar[Math.floor(Math.random() * cevaplar.length )];

     let embed = new MessageEmbed()
     .setAuthor(`${message.author.username} adlı kişinin pee pee uzunluğu`) 
     .setColor(`RANDOM`)
     .setDescription(cevap)


     message.channel.send(embed)
     
 }
}