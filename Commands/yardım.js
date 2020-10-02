const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const logo = 'https://cdn.discordapp.com/attachments/752241441492959363/756798968213536878/Screenshot_3.png';

module.exports = {
    name: "yardım",
    description: "Yardım komutu amk malı ne bekliyorsun",

    async run (client, message, args){

        const ana = new Discord.MessageEmbed()
        .setTitle('Ana Sayfa')
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription('Botun sahip olduğu ana komutları öğrenmek için aşağıdaki rehberi takip edin.\n⠀⠀⠀ \n') 
        .setThumbnail(logo)
        .setTimestamp() 
        .setFooter('Version 0.0.94', logo)
        .setColor('#FFE40B')
        .addFields({
            name: ' `*updates`',
            value: 'Botun update notlarını gösterir.\n'
        }, 
        {
            name: ' `*botinfo`',
            value: 'Botun bilgilerini gösterir.\n'
        }, 
        {
            name: '`Botun durumu...`',
            value: 'Pre-Beta Test\n⠀⠀⠀ \n'
        })

        const doviz = new Discord.MessageEmbed()
        .setTitle('Döviz\n⠀⠀⠀ \n')
        .setThumbnail(logo)
        .setFooter('Versiyon 0.0.94', logo)
        .setTimestamp()
        .setColor('#EDDD2B')
        .addFields({
            name: ' `*dolar`',
            value: 'O anki yada 1 gün önceki **dolar** kurunu gösterir. Merkez bankasının güncellenmesine bağlıdır.\n'
        }, 
        {
            name: ' `*euro`',
            value: 'O anki yada 1 gün önceki **euro** kurunu gösterir. Merkez bankasının güncellenmesine bağlıdır.\n'
        },
        {
            name: ' `*sterlin`',
            value: 'O anki yada 1 gün önceki **sterlin** kurunu gösterir. Merkez bankasının güncellenmesine bağlıdır.\n'
        }, 
        {
            name: ' `*ruble`',
            value: 'O anki yada 1 gün önceki **ruble** kurunu gösterir. Merkez bankasının güncellenmesine bağlıdır.\n⠀⠀⠀ \n'
        })

        const oyunlar = new Discord.MessageEmbed()
        .setTitle('Oyunlar\n⠀⠀⠀ \n')
        .setThumbnail(logo)
        .setTimestamp()
        .setFooter('Version 0.0.94', logo)
        .setColor('#EDDD2B')
        .addFields({
            name: ' `*hyazma`',
            value: 'Hızlı yazma oyunu başlatır. Gösterilen metini en hızlı yazan puan alır. En çok puanı alan süre bitince açıklanır.\n⠀⠀⠀ \n'
        })
        const ekonomi = new Discord.MessageEmbed()
        .setTitle('Ekonomi\n⠀⠀⠀ \n')
        .setThumbnail(logo)
        .setTimestamp()
        .setFooter('Versiyon 0.0.94', logo)
        .setColor('#EDDD2B')
        .addFields({
            name: ' `*cüzdan`',
            value: 'Sahip olduğun ADinarı miktarını gösterir.\n',
            inline: true
        }, 
        {
            name: ' `*çalış`',
            value: 'Her 10 dakikada bir **2.500** ile arasında **1** arasında Adinarı verir.\n',
            inline: true
        }, 
        {
            name: ' `*vergiler`',
            value: 'Her 6 saate bir **25.000** ile arasında **1.500** Adinarı verir.\n',
            inline: true
        }, 
        {
            name: ' `*pazar`',
            value: 'Adinarı ile satın alabileceğin şeyleri gösterir.\n',
            inline: true
        }, 
        {
            name: ' `*zenginler`',
            value: 'Serverde en çok ADinarı bulunanları gösterir.\n',
            inline: true
        }, 
        {
            name: ' `*satınal (eşya)`',
            value: 'Pazarda gözüken eşyaları satınalmak için kullanılır. Eşya kısmına parantez olmadan kullanımı yazılır.\n',
            inline: true
        }, 
        {
            name: ' `*varlıklar`',
            value: 'Sahip olduğun eşyaları gösterir.\n⠀⠀⠀ \n',
        })

        const pages = [
                ana,
                doviz,
                oyunlar,
                ekonomi,
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}