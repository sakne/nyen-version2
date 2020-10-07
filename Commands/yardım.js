const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const logo = 'https://cdn.discordapp.com/attachments/752241441492959363/756798968213536878/Screenshot_3.png';

module.exports = {
    name: "yardım",
    description: "Yardım komutu amk malı ne bekliyorsun",

    async run (client, message, args){

        const ana = new Discord.MessageEmbed()
        .setTitle('Ana Sayfa\n⠀⠀⠀ \n')
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription('Botun sahip olduğu ana komutları öğrenmek için aşağıdaki rehberi takip edin.') 
        .setThumbnail(logo)
        .setTimestamp() 
        .setFooter('Version 0.0.94', logo)
        .setColor('#FFE40B')
        .addFields({
            name: ' `*updates`',
            value: 'Botun update notlarını gösterir.'
        }, 
        {
            name: ' `*botinfo`',
            value: 'Botun bilgilerini gösterir.'
        }, 
        {
            name: '`Botun durumu...`',
            value: 'Pre-Beta Test'
        })

        const doviz = new Discord.MessageEmbed()
        .setTitle('Döviz Komutları\n⠀⠀⠀ \n')
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
            value: 'O anki yada 1 gün önceki **ruble** kurunu gösterir. Merkez bankasının güncellenmesine bağlıdır.\n'
        })

        const oyunlar = new Discord.MessageEmbed()
        .setTitle('Oyun Komutları\n⠀⠀⠀ \n')
        .setThumbnail(logo)
        .setTimestamp()
        .setFooter('Version 0.0.94', logo)
        .setColor('#EDDD2B')
        .addFields({
            name: ' `*hyazma`',
            value: 'Hızlı yazma oyunu başlatır. Gösterilen metini en hızlı yazan puan alır. En çok puanı alan süre bitince açıklanır.'
        })

        const nsfw = new Discord.MessageEmbed()
        .setTitle('NSFW Komutları\n⠀⠀⠀ \n')
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription('Komutları Kullanabilmek için kanalda NSFW açık olmalıdır.') 
        .setThumbnail(logo)
        .setTimestamp() 
        .setFooter('Version 0.0.94', logo)
        .setColor('#FFE40B')
        .addFields({
            name: ' `*nsfw`',
            value: 'https://hastebin.com/ihewenutaf.less içindekilerden rasgele gönderir.'
        }, 
        {
            name: ' `*hentai`',
            value: 'Hentai gönderir.'
        }, 
        {
            name: ' `*vgnsfw`',
            value: 'VideoGame nsfw gönderir.'
        }, 
        {
            name: ' `*videonsfw`',
            value: 'Rasgele bir NSFW Videosu gönderir. (Title kısmına tıklayarak açabilirsiniz)'

        }, 
        {
            name: ' `*jnsfw`',
            value: 'Japon NSFW si gönderir.'
        })

        const ekonomi = new Discord.MessageEmbed()
        .setTitle('Ekonomi Komutları\n⠀⠀⠀ \n')
        .setThumbnail(logo)
        .setTimestamp()
        .setFooter('Versiyon 0.0.94', logo)
        .setColor('#EDDD2B')
        .addFields({
            name: ' `*cüzdan`',
            value: 'Sahip olduğun ADinarı miktarını gösterir.',
            inline: true
        }, 
        {
            name: ' `*çalış`',
            value: 'Her 10 dakikada bir **2.500** ile arasında **1** arasında Adinarı verir.',
            inline: true
        }, 
        {
            name: ' `*vergiler`',
            value: 'Her 6 saate bir **25.000** ile arasında **1.500** Adinarı verir.',
            inline: true
        }, 
        {
            name: ' `*pazar`',
            value: 'Adinarı ile satın alabileceğin şeyleri gösterir.',
            inline: true
        }, 
        {
            name: ' `*zenginler`',
            value: 'Serverde en çok ADinarı bulunanları gösterir.',
            inline: true
        }, 
        {
            name: ' `*satınal (eşya)',
            value: 'Pazarda gözüken eşyaları satınalmak için kullanılır. Eşya kısmına parantez olmadan kullanımı yazılır.',
            inline: true
        }, 
        {
            name: ' `*varlıklar`',
            value: 'Sahip olduğun eşyaları gösterir.',
            inline: true
        })

        const pages = [
                ana,
                doviz,
                oyunlar,
                nsfw,
                ekonomi
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}