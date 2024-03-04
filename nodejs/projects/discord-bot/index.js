require('dotenv').config()
const {Client, GatewayIntentBits} = require("discord.js")

// GatewayIntentBits: this class (introduced in Discord.js v14) defines the different types of events (like messages, guild member joins, etc.) that your bot wants to receive information about from Discord.

// Creating a Discord Bot Client
// This line creates a new instance of the Client class, essentially creating a new Discord bot.
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
    // GatewayIntentBits.Guilds: This tells Discord that your bot is only interested in receiving events related to guilds (servers) at this point. You can add more intents to this array later if your bot needs to handle other types of events (like messages or voice chat).

})

client.on("messageCreate", (message) => {
    console.log(message);
    if(message.author.bot) return; 

    if(message.content.startsWith('create')){
        const url = message.content.split('create')[1];
        return message.reply({
            content: "Generating short URL for " + url,
        });
    }

    message.reply("Hello from mark01")
})

client.on('interactionCreate', (interaction) => {
    console.log(interaction)
    interaction.reply('Pong!!')
})

client.login(process.env.DISCORD_TOKEN);
