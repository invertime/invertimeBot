const Discord = require('discord.js'); 
const { Client, MessageAttachment } = require('discord.js');
const client = new Discord.Client(); 
client.on("ready", () => {  
    console.log("Ready !"); 
    client.user.setActivity("Nothing "); 
});
var prefix = "!invert";
client.on('message', message => {
    if (message.content === prefix + " " + "rip") {
        const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(`${message.author},`, attachment);
    }


    if (message.content === prefix + " " + "creator") {
        message.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "invertime",
                url: "https://invertime.ml",
                description: "hey i'm invertime and i have make this bot",
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "© Invertime"
                }
            }
        });
    }
});
client.login("yourtokenhere");
