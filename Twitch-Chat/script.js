require('dotenv').config();

const tmi = require('tmi.js');

const client = new tmi.Client({
    options: { debug: true },
    // identity: {
    //     username: process.env.TWITCH_USERNAME,
    //     password: process.env.TWITCH_AUTH
    // },
    channels: ['wolfabelle']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    // Ignore echoed messages.
    if (self) return;

    // if (message.toLowerCase() === '!hello') {
    //     // "@alca, heya!"
    //     client.say(channel, `@${tags.username}, heya!`);
    // }
    console.log(self);
});
