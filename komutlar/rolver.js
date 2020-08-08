const Discord = require('discord.js');

exports.run = function(client, message) {
let codepluskişi = message.mentions.members.first();
let codeplusrol = message.mentions.roles.first();
if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yeterli yetki bulunmamakta.')
if (!codepluskişi) return message.reply('Bir kişi belirtiniz.')
if (!codeplusrol) return message.reply('Bir rol belirtiniz.')
message.channel.send('Rol Verildi. Yetkiler Aktif ✓')
codepluskişi.addRole(codeplusrol)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rolver'
}