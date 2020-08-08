const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setTitle("**--**> Gold Üye Komutları <**--**")
 .setAuthor("Leviathan", client.user.avatarURL)
 .setColor("BLUE")
 .setDescription(`
kredi-çek: Plat-Kasa Açmanız İçin Yeterli Parayı Toplamanızı Sağlar.
gold-kasa: Eğer Paranız Yeterli İse Buradan Güzel Hediyeler Çıkarabilirsin.
kredim: Mevcut Kredilerinizi Gösterir.
kredi: [örn Kullanım: .kredi 2000] Sadece Bot Sahibi Kullanabilir.
`)
 
 
 .setFooter("Leviathan", client.user.avatarURL)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gold-üye"],
  permLevel: 0
};

module.exports.help = {
  name: 'gold-üye',
  description: 'Tüm Komutları Gösterir.',
  usage: 'gold-üye'
};