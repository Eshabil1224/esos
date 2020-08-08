const Discord = require('discord.js')

exports.run = async (client, message, params) => {

const sup = new Discord.RichEmbed()
.setDescription("公")
.setColor("BLACK")

message.channel.send(sup);

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tag"],
  permLevel: 0
};

exports.help = {
  name: 'bebem',
  description: 'ツ𝕾𝖚𝖗𝖕𝖗𝖎𝖘𝖊𝖑𝖔𝖛𝖊𝕿𝕽#0633',
  usage: 'kod1'
};