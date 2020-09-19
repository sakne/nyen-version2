const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('../../config.json')
const command = require('../../command')


command (client, 'yardım', (message => {
    const logo = 'https://cdn.discordapp.com/attachments/752241441492959363/756798968213536878/Screenshot_3.png'

  
    console.log(message.author)
    const embed = new Discord.MessageEmbed()
    .setTitle('NYEN KOMUTLARI')
    .setAuthor(message.author.username) 
    .setImage(logo)
    .setFooter('Build-in Progress')
    .setColor('#EDDD2B')
    .addFields({
        name: '**ClearChannel** -> kanaldaki mesajları siler.',
        value: '**Kullanım:** *cc',
        inline: false
    }, 
    {
      name: '**serverinfo** -> server bilgilerini gösterir.',
      value: '**Kullanım:** *serverinfo',
      inline: false
    }, 
    {
      name: '**memes** -> reddit üzerinden meme gönderir.',
      value: '**Kullanım:** *shitpost',
      inline: false
    },
    {
      name: '**drama** -> drama.',
      value: '**Kullanım:** drama',
      inline: false
    },
    {
      name: '**müzik için yardım** -> müzik komutlarını gösterir..',
      value: '**Kullanım:** *myardım',
      inline: false
    },
    {
      name: '**çekiliş komutu** -> belirli bir çekiliş başlatır (Adminler için)',
      value: '**Kullanım:** *çekiliş-başlat + #kanal + m,h,d olarak sayı (konulmazsa saniye olur) + kazanan sayısı + ödül',
      inline: false
    }, 
    {
      name: '**bot bilgileri komutu** -> Bot hakkında bilgileri gösterir.',
      value: '**Kullanım:** *botinfo',

    }, 
    {
      name: '**Kullanıcı bilgileri komutu** -> Kullanıcı hakkında bazı bilgiler gösterir',
      value: '**Kullanım:** *kbilgi yada *kbilgi @kullanıcı'

    })

    message.channel.send(embed)
}))

client.login(config.token)