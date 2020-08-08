const Discord = require('discord.js');
const a = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {

  
  let cfxistek = await db.fetch(`istekkanal${message.guild.id}`)
  let cfxistekkanal = message.mentions.channels.first();
  
  const cfx1 = new Discord.RichEmbed()
  .setDescription(`Hata Kanalı ${cfxistekkanal} olarak ayarlandı.`)
  .setColor("#00ff88")
  .setFooter(`Leviathan Hata Kanal Sistemi.`, client.user.avatarURL)
  const cfx2 = new Discord.RichEmbed()
  .setDescription(`Hata Kod Kanalı Kapatıldı.`)
  .setColor("#00ff88")
  .setFooter(`Leviathan Hata Kanal Sistemi.`, client.user.avatarURL)
  const cfxembed = new Discord.RichEmbed()
  .setTitle(`**\`Hata-Kanal Bilgi;\`**`)
  .setDescription(`** ** \n**Ayarlamak İçin:** \`${a.prefix}hata-kanal ayarla #kanal\`\n\n **Kapatmak İçin:** \`${a.prefix}hata-kanal kapat [ Sadece Bot Sahibi Erişebilir. ]\``)
  .setColor("#00ff88")
  .setFooter(`Leviathan Hata Kanal Sistemi.`, client.user.avatarURL)
  
  
  if (!args[0]) return message.channel.send(cfxembed)
  
  if (args[0] == cfxistekkanal) return db.set(`istekkanal${message.guild.id}`, cfxistekkanal.id) - message.channel.send(cfx1);
    

  if (args[0] == 'ayarla') {
    
    db.set(`istekkanal${message.guild.id}`, cfxistekkanal.id)
    message.channel.send(cfx1)
    
    
  }
  
  if (args[0] == 'kapat') {
    
    db.delete(`istekkanal${message.guild.id}`)
    message.channel.send(cfx2)
    
  }
  
  
};

// CodeFENIX // CFX
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['hkanal'],
  permLevel: 4
};

exports.help = {
  name: 'hata-kanal',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'hata-kanal #kanal'
};


// BU KOD CFX KOD PAYLASIM TARAFINDAN YAZILMISTIR IZINSIZ PAYLASILMASI YASAKTIR ILETISIM: support@codefenix.dx.am // CFX IYI GUNLER DILER /