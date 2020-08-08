const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');

exports.run = (client, message) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${moment().format('**DD.MM.YYYY**')}`);
    message.channel.sendEmbed(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tarih'],
  permLevel: 0
};

exports.help = {
  name: 'tarih',
  description: 'Tarihi ve saati gösteririr.',
  usage: 'tarih'
};