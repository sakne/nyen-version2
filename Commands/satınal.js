const db = require('quick.db');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "satınal",
    description: "Marketten eşya satın al.",

    async run (client, message, args) {
        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('Satınalmak için birşey seçin. *pazar dan görebilirsiniz.')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)






                                       //ARABALAR
        if(purchase === 'tofas'){
            if(amount < 1500) return message.channel.send('Bunu satın almak için yeterli paran yok.');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 1500);
            db.push(message.author.id, "Tofaş Şahin");
            let embed = new MessageEmbed()
            .setTitle('Başarılı!')
            .setColor('#00FF04')
            .addFields({
                name:'Hurdacıdan bir adet **Tofaş Şahin** aldın ve çalıştı.',
                value:'Ödediğin para --> 1500 ADinarı'
            })
            .setTimestamp();
            message.channel.send(embed)
        }
        if(purchase === 'saat'){
            if(amount < 95) return message.channel.send('Bunu satın almak için yeterli paran yok.');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 95);
            db.push(message.author.id, "Çakma Saat");
            let embed = new MessageEmbed()
            .setTitle('Başarılı!')
            .setColor('#00FF04')
            .addFields({
                name:'Letgodan **Saat** satın aldın ve dolandırıldın',
                value:'Ödediğin para --> 95 ADinarı'
            })
            .setTimestamp();
            message.channel.send(embed)
        }
        if(purchase === 'opel'){
            if(amount < 5000) return message.channel.send('Bunu satın almak için yeterli paran yok.');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 5000);
            db.push(message.author.id, "Opel Corsa ");
            let embed = new MessageEmbed()
            .setTitle('Başarılı!')
            .setColor('#00FF04')
            .addFields({
                name:'Sahibindenden **Opel Corsa ** satın aldın!',
                value:'Ödediğin para --> 5.000 ADinarı'
            })
            .setTimestamp();
            message.channel.send(embed)
        }
        if(purchase === 'gtr'){
            if(amount < 55000) return message.channel.send('Bunu satın almak için yeterli paran yok.');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 55000);
            db.push(message.author.id, "Nissan GTR");
            let embed = new MessageEmbed()
            .setTitle('Başarılı!')
            .setColor('#00FF04')
            .addFields({
                name:'Sahibindenden **Nissan GTR** satın aldın!',
                value:'Ödediğin para --> 55.000 ADinarı'
            })
            .setTimestamp();
            message.channel.send(embed)
        }
        if(purchase === 'r7'){
            if(amount < 95000) return message.channel.send('Bunu satın almak için yeterli paran yok.');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 95000);
            db.push(message.author.id, "Audi R7");
            let embed = new MessageEmbed()
            .setTitle('Başarılı!')
            .setColor('#00FF04')
            .addFields({
                name:'Sahibindenden **Audi R7** satın aldın!',
                value:'Ödediğin para --> 95.000 ADinarı'
            })
            .setTimestamp();
            message.channel.send(embed)
        }
        if(purchase === 'bmwm8 '){
            if(amount < 250000) return message.channel.send('Bunu satın almak için yeterli paran yok.');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 250000);
            db.push(message.author.id, "BMW M8 GC");
            let embed = new MessageEmbed()
            .setTitle('Başarılı!')
            .setColor('#00FF04')
            .addFields({
                name:'Galeriden **BMW M8 GC** satın aldın!',
                value:'Ödediğin para --> 250.000 ADinarı'
            })
            .setTimestamp();
            message.channel.send(embed)
        }
        if(purchase === 'jaguar'){
            if(amount < 450000) return message.channel.send('Bunu satın almak için yeterli paran yok.');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 450000);
            db.push(message.author.id, "Jaguar F-TYPE");
            let embed = new MessageEmbed()
            .setTitle('Başarılı!')
            .setColor('#00FF04')
            .addFields({
                name:'Galeriden **Jaguar F-TYPE** satın aldın!',
                value:'Ödediğin para --> 450.000 ADinarı'
            })
            .setTimestamp();
            message.channel.send(embed)
        }
        if(purchase === 'mclaren'){
            if(amount < 950000) return message.channel.send('Bunu satın almak için yeterli paran yok.');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 950000);
            db.push(message.author.id, "Mclaren 765t");
            let embed = new MessageEmbed()
            .setTitle('Başarılı!')
            .setColor('#00FF04')
            .addFields({
                name:'Özel olarak **Mclaren 765t** sipariş ettin ve eline ulaştı!',
                value:'Ödediğin para --> 950.000 ADinarı'
            })
            .setTimestamp();
            message.channel.send(embed)
        }
        if(purchase === 'phantom'){
            if(amount < 1250000) return message.channel.send('Bunu satın almak için yeterli paran yok.');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 1250000);
            db.push(message.author.id, "Rolls-Royce Phantom");
            let embed = new MessageEmbed()
            .setTitle('Başarılı!')
            .setColor('#00FF04')
            .addFields({
                name:'Özel olarak **Rolls-Royce Phantom** sipariş ettin ve eline ulaştı!',
                value:'Ödediğin para --> 1.250.000 ADinarı'
            })
            .setTimestamp();
            message.channel.send(embed)
        }
        if(purchase === 'gemera'){
            if(amount < 2000000) return message.channel.send('Bunu satın almak için yeterli paran yok.');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 2000000);
            db.push(message.author.id, "Koenigsegg Gemera");
            let embed = new MessageEmbed()
            .setTitle('Başarılı!')
            .setColor('#00FF04')
            .addFields({
                name:'Özel olarak **Koenigsegg Gemera** sipariş ettin ve eline ulaştı!',
                value:'Ödediğin para --> 2.000.000 ADinarı'
            })
            .setTimestamp();
            message.channel.send(embed)
        }
    }
}