//const Discord = require('discord.js')
//const client = new Discord.Client()
const path = require('path')
const Commando = require('discord.js-commando')

const config = require('./config.json')
const command = require('./command')
const cc = require('./Commands/basic moderation/clearchannel.js')
const customanswers = require('./Commands/misc/custom-answers.js')

const client = new Commando.CommandoClient ({
    owner: '293313025174274049',
    commandPrefix: config.prefix
})



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`${client.guilds.cache.size} serverdeki || ${client.users.cache.size} kullanıcıya hizmet ediyor`, {type: "LISTENING"});
    


    client.registry
    .registerGroups([
        ['basic moderation', 'basic moderation commands'],
        ['misc', 'misc commands'],
        ['fun', 'fun commands'],
        ['games', 'Commands to handle games'],
        ['döviz', 'Döviz commands'],
        ['berat albayrak', 'Ekonomi komutları']
    ])
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands({
        help: false,
        unknownCommand: false
    })
    .registerCommandsIn(path.join(__dirname, 'cmds'))
})




//command handler bölümü ( module.exports kısmı için hazırlık)

const Discord = require('discord.js')

const { readdirSync } = require('fs');

const { join } = require('path');

client.commands= new Discord.Collection();

const prefix = '*';



const commandFiles = readdirSync(join(__dirname, "Commands")).filter(file => file.endsWith(".js")); //commands klasörü içindeki js ile biten dosyalarda çalışıyor.

for (const file of commandFiles) {
    const command = require(join(__dirname, "Commands", `${file}`));
    client.commands.set(command.name, command);
}


client.on("error", console.error);

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})



client.login(config.token)