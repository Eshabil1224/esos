const Discord = require('discord.js');

exports.run = (client, message, args) => {
  (`${client.emojis.get("id")}`)
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Bota yazı yazdırırsınız.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
