const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.name === "X' s"); // JS Rolünün Tam Isminin Yazin
  if (message.member.roles.has(role.id)) return message.channel.send("⛔ Zaten bu role sahipsin :/")
  message.member.addRole(role);
  message.channel.send(`✅ Roller Başarıyla Verildi. Artık İlgili Odaları Görebilirsiniz :)`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['js'],
  permLevel: 0
};

exports.help = {
  name: 'js',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'js'
};