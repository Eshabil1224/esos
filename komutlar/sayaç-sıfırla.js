const Discord = require('discord.js');
const fs = require('fs');
const profil = JSON.parse(fs.readFileSync("./sayaç.json", "utf8"));

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("❌ Bu Komutu Kullanabilmek İçin `Sunucuyu Yönet`  Yetkisine Sahip Olaman Gerekli!")
  if(!profil[message.guild.id]) return message.channel.send("❌ Sunucunuzda **Sayaç Sistemi** Ayarlanmamış!")
  if(profil[message.guild.id]) {
    delete profil[message.guild.id]
    message.channel.send("✅  Sayaç Sıfırlandı!")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sayaç-sıfırla"]
};

exports.help = {
  name: 'sayaç-sıfırla',
  description: 'sayaç sistemi kapatma gösterir.',
  usage: 'sayaç-sıfırla'
}