const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')
const { version } = require('../../package.json')
const TCMB_Doviz = require('tcmb-doviz');
const Doviz = new TCMB_Doviz();
const Discord = require('discord.js')


module.exports = class BotInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'euro',
            group: 'döviz',
            memberName: 'euro',
            description: 'En sonki euro kurunu gönderir.'
        })
    }


    run = async (message) => {
        const res = await Doviz.getKur("EUR");
        const tarih = await Doviz.guncelTarih();
        let embed = new MessageEmbed();
        embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL);
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`);
        embed.setColor('#EDDD2B');
        embed.addField(`Alış`,res.alis);
        embed.addField(`Satış`,res.satis,true);
        embed.addField(`Birim Kodu`,res.kod,true);
        message.channel.send({embed: embed});
    }
}