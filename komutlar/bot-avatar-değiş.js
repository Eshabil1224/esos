const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if(message.author.id !== ayarlar.sahip) 
    return message.reply('bunu kullanmak için bot sahibi olman lazım.');
    const ayarlanan = args.join(` `);
    client.user.setAvatar(ayarlanan);
  return message.channel.send("Seçtiğiniz Resmi Botun Profili Olarak Güncelledim!");
      
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-resim"],
  permLevel: 4
};

exports.help = {
  name: 'bot-avatar-değiş'
};