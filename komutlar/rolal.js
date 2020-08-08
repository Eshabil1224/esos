const Discord = require('discord.js');

exports.run = function(client, message) {
let codepluskişi = message.mentions.members.first();
let codeplusrol = message.mentions.roles.first();
if (!message.member.hasPermission('ADMINISTRATORO')) return message.reply('Yeterli yetki bulunmamakta.')
if (!codepluskişi) return message.reply('Bir kişi belirtiniz.')
if (!codeplusrol) return message.reply('Bir rol belirtiniz.')
message.channel.send('Rol Alındı. Yetkiler Sıfırlandı X')
codepluskişi.removeRole(codeplusrol)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'rolal'
}