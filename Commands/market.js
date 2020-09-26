const Discord = require('discord.js');

module.exports = {
    name: "pazar",
    description: "Satın alabileceğin şeyler",

    async run (client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setTitle('PAZAR')
        .setColor('#EDDD2B')
        .setDescription(`Pazardan satın alabileceğin şeyler... \n ⠀⠀⠀ \n`)
        .addFields({
            name: 'Pazar Versionu -> __**0.0.9**__',
            value: '⠀⠀⠀ \n _**ARABALAR**_ \n ▬ Tofaş Şahin | **1.500 Adinarı** | Alımı -> tofas\n ▬ Opel Corsa | **5.000 Adinarı** | Alımı -> opel  \n ▬ Nissan GTR | **55.000 ADinarı ** | Alımı -> gtr  \n ▬ Audi R7 | **95.000 Adinarı** | Alımı -> r7  \n ▬ BMW M8 GC | **250.000 Adinarı** | Alımı -> bmwm8 \n ▬ Jaguar F-TYPE | **450.000 Adinarı** | Alımı -> jaguar  \n ▬ Mclaren 765t | **950.000 Adinarı** | Alımı -> mclaren   \n ▬ Rolls-Royce Phantom | **1.250.000 Adinarı** | Alımı -> phantom\n ▬ Koenigsegg Gemera | **2.000.000 Adinarı** | Alımı -> gemera \n ⠀⠀⠀ \n–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––\n ⠀⠀⠀ \n'
        })
        .setTimestamp();

        message.channel.send(embed);
    }
}