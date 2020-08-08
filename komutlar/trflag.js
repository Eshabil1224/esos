const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Ne Mutlu Türküm Diyene <3 !!!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://i.hizliresim.com/bv7L98.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['nmtd'],
  permLevel: 0
};

exports.help = {
  name: 'bayrak',
  description: 'Dene ve Gör :D',
  usage: 'bayrak'
};
 