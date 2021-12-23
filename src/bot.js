require('dotenv').config();
const discordBotToken = process.env.DISCORDJS_BOT_TOKEN
const slackSigningSecret = process.env.SLACK_SIGNING_SECRET
const slackVerificationToken = process.env.SLACK_VERIFICATION_TOKEN
const slackOAuthToken = process.env.SLACK_OAUTH_TOKEN
const portNumber = process.env.PORT_NUMBER || 3000

const { WebClient } = require('@slack/web-api')
const { createEventAdapter } = require('@slack/events-api')

const slackEvents = createEventAdapter(slackSigningSecret)
const slackClient = new WebClient(slackOAuthToken)

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

console.log(discordBotToken, slackSigningSecret, slackVerificationToken, slackOAuthToken) // <--- remove later

client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}!`)
})

client.on('messageCreate', msg => {
    if (msg.author.username != 'slackbot') {
        msg.reply("Hey!, Stop poking me " + msg.author.username)
        console.log(msg)
        slackClient.chat.postMessage({channel:"C02RQSL73QT", text:msg.content}).catch(console.log('moo'))
    }
})

// client.
// client.emit 

slackEvents.on('app_mention', (event) => {
    console.log('from slack');
    console.log(event);
    console.log('from slack ', event.user + ": " + event.text);
    // console.log(slackClient.chat.postMessage({channel:"C02RQSL73QT", text:'moo2'}).catch(console.log('moo')))
    console.log('----------------')
    console.log(slackClient.chat.postMessage({channel: event.channel, text: `<@${event.user}>! :tada:, you can't spell!`}).catch(console.log('got error')))
    // (async () => {
    //     try {
    //         console.log('trying to send message', event.channel, event.user)
    //         await slackClient.chat.postMessage({channel: event.channel, text: `@${event.user} :tada:, you can't spell!`})
    //     } catch (error) {
    //         console.log('caught error') 
    //         console.log(error.data)
    //     }
    // })();
})

slackEvents.on('error', (err) => {
    console.log('slack error')
    console.log(err)
})



slackEvents.start(portNumber).then(() => {
    console.log('server started on port ' + portNumber)
}).then()
client.login(discordBotToken)