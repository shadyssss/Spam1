const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592299994539753472")
setInterval(function() {
channel.send(`Boted By Shady <3`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
