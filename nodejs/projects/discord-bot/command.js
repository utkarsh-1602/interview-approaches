require('dotenv').config()
const { REST, Routes } = require('discord.js');

const commands = [
    {
      name: 'create',
      description: 'Creates a new short URL',
    },
  ];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

// IIFE (Immediately invoked function expression)
(async () => {

    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
      

})();