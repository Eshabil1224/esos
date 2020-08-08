const db = require("quick.db")
const Discord = require("discord.js");

exports.run = function(client, message, args) {

  var cfxu = message.author;
  var cfxsp = args.slice(0).join("  "); message.delete (1000)
  const cfxreason = new Discord.RichEmbed()
  .setDescription(` \`${message.author.username}\` **AFK moduna geçmek için bir sebep belirtmelisin.**`)
  .setColor("#00ff88")
  .setFooter(`Leviathan AFK Sistemi.`, client.user.avatarURL)
  if(!cfxsp) return message.channel.send(cfxreason);
  
  db.set(`afk_${cfxu.id}`, cfxsp);
  db.set(`afk_süre_${cfxu.id}`, Date.now());
  const codefenixkodpaylasim = new Discord.RichEmbed()
  .setDescription(` \`${cfxu.username}\` **Başarıyla AFK moduna girdin.**`)
  .setThumbnail(message.author.avatarURL)
  .setColor("#00ff88")
  .setFooter(`Leviathan AFK Sistemi.`, client.user.avatarURL)
  message.channel.send(codefenixkodpaylasim)
  
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'afk', 
  description: 'CFX KOD PAYLASIM',
  usage: 'afk <sebep>'
};


// BU KOD CFX KOD PAYLASIM TARAFINDAN YAZILMISTIR IZINSIZ PAYLASILMASI YASAKTIR ILETISIM: support@codefenix.dx.am // CFX IYI GUNLER DILER //