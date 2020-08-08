const Discord = require('discord.js');
const db = require('quick.db');
const a = require('../ayarlar.json') 
 
exports.run = async function(client, message, args) {
  let user = message.author
    
  const cfx1 = new Discord.RichEmbed()
  .setDescription(`**Hata Kanalı Ayarlanmamış!** \n\n **Ayarlamak İçin:** \`${a.prefix}hata-kanal ayarla #kanal\``)
  .setColor("#00ff88")
  .setFooter(`Leviathan Hatalı Kod Sistemi.`, client.user.avatarURL)
  const cfx2 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` Lütfen Hatalı Kodu Bildiriniz.`)
  .setColor("#00ff88")
  .setFooter(`Leviathan Hatalı Kod Sistemi.`, client.user.avatarURL)
  const cfx3 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` Hata Raporunun Gönderilmesini istiyorsan \`istiyorum\` yazman gerekiyor.`)
  .setColor("#00ff88")
  .setFooter(`Leviathan Hatalı Kod Sistemi.`, client.user.avatarURL)
  const cfx4 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` Hata Raporun Gönderildi En Kısa Sürede İlgilenilecektir!`)
  .setColor("#00ff88")
  .setFooter(`Leviathan Hatalı Kod Sistemi.`, client.user.avatarURL)
  
  
  
    let cfxistekkanal = await db.fetch(`istekkanal${message.guild.id}`)
    let chan = message.guild.channels.find('id', cfxistekkanal)
    let code = args.slice(0).join(' ');
    if (!cfxistekkanal) return message.channel.send(cfx1)
    if (code.length < 1) return message.channel.send(cfx2);
  if (message.author) {
message.channel.send(cfx3)
//CodeFENIX // CFX
.then(() => {
message.channel.awaitMessages(response =>response.content ==='istiyorum', {
max: 1,
time: 30000,
errors: ['time'],
})

.then((collected) => {
message.channel.send(cfx4)
//CodeFENIX //CFX
const cfx = new Discord.RichEmbed()
.setColor("#00ff88")
.addField(`Kullanıcı Adı`,message.author.username,true)
.addField(`Kullanıcı ID`,message.author.id,true)
.addField(`Kullanıcı Tagı`,message.author.discriminator,true)
.addField("Hatalı Komut", code)
.setThumbnail(message.author.avatarURL)
chan.send(cfx);
});
});
}};

// CodeFENIX // CFX
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["hata"],
  permLevel: 0 
};

exports.help = {
  name: 'hata',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'hata <istediğiniz>'
};


// BU KOD CFX KOD PAYLASIM TARAFINDAN YAZILMISTIR IZINSIZ PAYLASILMASI YASAKTIR ILETISIM: support@codefenix.dx.am // CFX IYI GUNLER DILER //