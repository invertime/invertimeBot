const Discord = require('discord.js'); //Ce que le bot à besoin /
const { Client, MessageAttachment } = require('discord.js');
const client = new Discord.Client(); //Que votre Bot est un nouvel utilisateur
client.on("ready", () => { //Signifie que le bot à bien démarré 
    console.log("Je suis prêt !"); //Lorsque que le bot est lancé observer la console Visual Studio 
    client.user.setActivity("s'updater seul"); //Voir le Jeu sur le Discord
});
var prefix = "!invert"; //Prefix de votre Bot ( *play www.youtube.com/ )
client.on('message', message => {
    // If the message is '!rip'
    if (message.content === prefix + " " + "rip") {
      // Create the attachment using MessageAttachment
      const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
      // Send the attachment in the message channel
      message.channel.send(`${message.author},`, attachment);
    }
  

  if (message.content === prefix + " " + "creator"){
    message.channel.send({embed: {
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
client.login("NzAxNzAyNDgwMjg2OTczOTYz.Xp1eEA.DNaFXEWY0iaFFlb9su_eeuYzVT0"); //Token (Série de chiffre) propre a chaque Bot
