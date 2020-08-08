const Discord = require('discord.js')
exports.run = (client, message, params) => {
const embed = new Discord.RichEmbed()
.setTitle('🇹🇷 Türkiyemizin Saati ⬇️ ')     
.setTimestamp()
.setFooter(' Türkiye Saatimiz ➡️ ')
.setColor("Random")

message.channel.sendMessage(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["st",], 
    permLevel: 0
  };
  
  exports.help = {
    name: 'saat',
    description: 'saat',
    usage: 'saat'
  };