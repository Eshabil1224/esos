const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('710641039655829566') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username}`,client.user.avatarURL)
        .setColor('RANDOM')
        .setTitle(`=> ${client.user.username} - Komutlar <= `)
        .setDescription(` <a:twitch_money6:722852199759347752> **${ayarlar.prefix}bot-sahip** <a:twitch_money6:722852199759347752> [ Sahip Menüsü! ] \n<a:sirren_blue:721531845891588157> **${ayarlar.prefix}yetkili** <a:sirren_red:721531945644720129> [ Yetkili Menüsü! ] \n<a:_booster_:721529555285704797> **${ayarlar.prefix}kullanıcı** <a:_booster_:721529555285704797> [ Kullanıcı Menüsü! ] \n<a:tadaa:721535403760550029> **${ayarlar.prefix}eğlence** <a:tadaa:721535403760550029> [ Eğlence Menüsü! ] \n<a:discord_gear:721533496732155975> **${ayarlar.prefix}bot-komut** <a:discord_gear:721533496732155975> [ Bot Menüsü! ] \n<a:twitch_money3:721531262522884109> **${ayarlar.prefix}gold-üye** <a:twitch_money3:721531262522884109> [ Gold Üye Menüsü! ] \n <a:plak_emoji:721162721684488272> **${ayarlar.prefix}müzik** <a:plak_emoji:721162721684488272> [ Müzik Menüsü! ] \n` )
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};