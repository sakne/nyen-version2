//const Discord = require('discord.js')
//const client = new Discord.Client()
const path = require('path')
const Commando = require('discord.js-commando')

const config = require('./config.json')
const command = require('./command')
const yardım = require('./Commands/misc/Help.js')
const memes = require('./Commands/fun/memes.js')
const cc = require('./Commands/basic moderation/clearchannel.js')
const server = require('./Commands/basic moderation/server.js')
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
        ['fun', 'fun commands']
    ])
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands({
        help: false,
        unknownCommand: false
    })
    .registerCommandsIn(path.join(__dirname, 'cmds'))
})


client.login(config.token)