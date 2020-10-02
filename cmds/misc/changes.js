const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = class GameInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'updates',
            group: 'misc',
            memberName: 'updates',
            description: 'En sonki update loglarını gösterir.'
        })
    }

    run = async (message) => {
        const embed = new MessageEmbed()
        .setTitle('Update Notları')
        .setDescription('Bota gelen update notlarını ve neler geldiğini gösterir.')
        .setColor('#EDDD2B')
        .setThumbnail(this.client.user.displayAvatarURL())
        .setFooter('*yardım komut bilgileri için. (Build-in Progress)')
        .addFields({
            name: 'Mini Güncelleme Versionu -> __**0.0.95**__',
            value: '⠀⠀⠀ \n _**YENİ KOMUTLAR**_ \n ▬ Leaderboard Komutu eklendi.\n ⠀⠀⠀\n _**BUG FİXLERİ**_ \n ▬ Araba alırken 2 kez satın alma düzeltildi.\n ⠀⠀⠀ \n _**GÖRÜNÜŞ YÜKSELTMELERİ**_ \n ▬ Updates kısmı geliştirildi. Hepsi tek komuta düşürüldü. \n ⠀⠀⠀ \n–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––\n ⠀⠀⠀ \n'
        },
        {
            name: 'Güncelleme Versionu -> __**0.0.9**__',
            value: '⠀⠀⠀ \n _**YENİ KOMUTLAR**_ \n **▬ CHANGES KOMUTU EKLENDİ** \n ▬ envanter komutu eklendi. \n ▬ çalışma komutu eklendi. \n ▬ market komutu eklendi. \n ▬ satınal komutu eklendi. (marketteki eşyaları satınalmak için) \n ⠀⠀⠀\n _**BUG FİXLERİ**_ \n ▬ yok.\n ⠀⠀⠀ \n _**GÖRÜNÜŞ YÜKSELTMELERİ**_ \n ▬ cüzdan komutunun görünüşü embed e çevirildi. \n ▬ çalışma komutunun görünüşü embed e değiştirildi. \n ▬ vergiler komutunun görünüşü embed e değiştirildi.\n ⠀⠀⠀ \n–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––\n ⠀⠀⠀ \n'
        }, 
        {
            name: 'Güncelleme Versionu -> __**0.0.8**__',
            value: '⠀⠀⠀ \n_**YENİ KOMUTLAR**_ \n ▬ cüzdan komutu eklendi. \n ▬ çalışma komutu eklendi. \n ▬ vergiler komutu eklendi (6 saatde bir para alma) \n ⠀⠀⠀\n _**BUG FİXLERİ**_ \n ▬ Dövizlerdeki saatin yanlış gözükmesi bugu düzeltildi. \n ▬ user-info daki bazı açıklar kapatılarak geliştirildi. \n ▬ botinfo daki bazı açıklar kapatılarak geliştirildi. \n ▬ serverinfo daki bazı açıklar kapatılarak geliştirildi.\n ⠀⠀⠀  \n_**GÖRÜNÜŞ YÜKSELTMELERİ**_ \n ▬ yok.\n ⠀⠀⠀ \n'
        })

        message.channel.send(embed)
    }
}