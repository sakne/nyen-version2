const Commando = require('discord.js-commando')
const { words } = require('../../util/fast-type-words.json')

const example = {
    channelId: {
        message: 'message object',
        stage: 'string',
        counter: 'number',
        currentWord: 'string',
        remainingWords: ['words here'],
        points: {
            userId: 'points'
        },
    }
}


const games = {}

const stages = {
    STARTING: (counter) => {
        return `Yeni bir "Hızlı Yazma" oyunu | ${counter} | saniye sonra başlıyor`
    },
    IN_GAME: (word) => {
        let spacedWord = ''
    
        for (const character of [...word]) {
          spacedWord += character
          spacedWord += ' '
        }
    
        return `Şu Anki Kelime -->|    **${spacedWord}**   |`
      },
    ENDING: (points) => {
        const sorted = Object.keys(points).sort((a, b) => {
            return points[b] - points[a]
        })

        let results = ''

        for (const key of sorted) {
            const amount = points[key]
            results += `<@${key}> Adlı kişinin **${amount}** puanı var.\n`
        }

        return `Oyun sona erdi. Sonuçlar şu şekilde:\n\n\n${results}\n\n-------------------------------------------`
    },
}

const selectWord = (game) => {
    game.currentWord =
      game.remainingWords[Math.floor(Math.random() * game.remainingWords.length)]
  
    const index = game.remainingWords.indexOf(game.currentWord)
    game.remainingWords.splice(index, 1)
  }

const gameLoop = () => {
    for (const key in games) {
        const game = games[key]
        const { message, stage } = game

        if (stage === 'STARTING') {
            let string = stages[stage](game.counter)
            message.edit(string)

            if(game.counter <= 0) {
                game.stage = 'IN_GAME'
                game.counter = 60


                selectWord(game)

                string = stages[game.stage](game.currentWord)
                message.edit(string)

            }
        } else if (stage === 'IN_GAME') {
            if (game.counter <= 0) {
                game.stage = 'ENDING'

                const string = stages[game.stage](game.points)
                message.edit(string)

                //oyunu silmek için
                delete games[key]

                continue
            }
        }

        --game.counter
    }


   setTimeout(gameLoop, 1000)
}

module.exports = class FastTypeGame extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'hyazma',
            group: 'games',
            memberName: 'hyazma',
            description: 'Hızlı yazma oyunu başlatır',
            userPermissions: ['MOVE_MEMBERS'],
        })

        client.on('message', message => {

            const { channel, content, member } = message
            const { id } = channel

            const game = games[id]

            if (game && game.currentWord && !member.user.bot) {
                message.delete()

                if (game.stage === 'IN_GAME' && content.toLowerCase() === game.currentWord.toLowerCase()) {
                    game.currentWord = null
                    const seconds = 2

                    const { points } = game
                    points[member.id] = points[member.id] || 0

                    message.reply(`İlk yazan sen olup **+1** puan kazandın (toplam **${++points[member.id]}** puanın var)`).then(newMessage => {
                        newMessage.delete({
                            timeout: 1000 * seconds
                        })
                    })

                    setTimeout(() => {
                        if (game.stage === 'IN_GAME') {
                            selectWord(game)

                            const string = stages[game.stage](game.currentWord)
                            game.message.edit(string)
                        }
                    }, 1000 * seconds)

                }

            }
        })

        gameLoop()
    }

    async run(message) {
        const { channel } = message

        message.delete()
        channel.send('Oyun Hazırlanıyor...').then((message) => {
            games[channel.id] = {
                message,
                stage: 'STARTING',
                counter: 5,
                remainingWords: [...words],
                points: {
                }
            }
        })
    }

}

