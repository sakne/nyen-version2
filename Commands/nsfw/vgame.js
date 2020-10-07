const trev = require("trev");
const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('../../config.json')
client.on('message', message => {
async function main() {
    let hentai = await trev.nsfw.vgame()
    if (message.author.bot) return false;

    if (message.content.toLowerCase() == config.prefix + "vgnsfw") {
        if (message.channel.nsfw) {
            let embed2 = new Discord.MessageEmbed()
            .setTitle(`${hentai.title}`)
            .setURL(`${hentai.media}`)
            .setDescription(`Alınan Yer: **${hentai.subreddit}**`)
            .setImage(`${hentai.media}`)
            .setFooter(`${hentai.author}`)
            message.channel.send(embed2);
        } else {
            let embed = new Discord.MessageEmbed()
            .setAuthor('Bu Kanalda | NSFW | Açık Değil!')
            .setDescription('Kanal Ayarlarında Şu Şekilde Açabilirsin.')
            .setImage('https://i.imgur.com/oe4iK5i.gif')
            .setColor(`#FF0000`)
            message.channel.send(embed);
        }
    }
}
main();
});

client.login(config.token)