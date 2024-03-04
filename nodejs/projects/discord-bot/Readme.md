# Discord Bot Documentation

## Discord Gateway Intents 
In Discord bots, Gateway Intents are a mechanism introduced by Discord to provide more control over the events (messages, presence updates, etc.) that your bot receives. This allows for more efficient operation by only receiving the data your bot truly needs to function.

## Gateway Intent Bits 
These intents are represented using bits (0s and 1s) within a 53-bit integer. By enabling specific intents, you essentially set the corresponding bits to 1 in the integer. Discord's libraries, like discord.js, handle these bitwise operations behind the scenes.

# More Features to be added:
- integration mongoDB database to discord bot
- integration discord bot to openai api 
- providing a command to discord bot to generate a short URL for your `urls`