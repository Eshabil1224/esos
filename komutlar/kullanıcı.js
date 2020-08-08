const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setTitle("**--**> Kullanıcı Komutları <**--**")
 .setAuthor("Leviathan", client.user.avatarURL)
 .setColor("BLUE")
 .setDescription(`

saat: Türkiyemizin Saatini Gösterir.
tarih: Tarihi Gösterir.
seviye: Seviyenizi Gösterir. [Veri Gecikmesi Olabilir]
kısalt: İstediğiniz Linki Kısaltır.
avatar: Avatarınızı Gösterir.
davet: Botun Davet Linkini Gösterir.
emojiyazı: Mesajınızı Emoji Haline Getirir.
öneri: Sunucuya Öneri Bildirirsiniz.
sunucubilgi- Sunucunun Genel Bilgisini Gösterir.
roller: Sunucudaki Tûm Rolleri Gösterir.
rolbilgi: Yazdınız Rolün Bilgisini Gösterir.
kb: Kullanıcı Bilgisini Gösterir.
spotify: Spotifyde Dinlenen Şarkının Bilgilerini Gösterir.
playstore: İstediğiniz Öğeyi Playstore üzetinden Aratır.
sunucular: Botun Kaç Kisi ve Kaç Serverde Olduğunü Söyler.
nsfw-gif: Hşşş Gizli Bişi Bu :D
`)
 
 
 .setFooter("Leviathan", client.user.avatarURL)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kullanıcı"],
  permLevel: 0
};

module.exports.help = {
  name: 'kullanıcı',
  description: 'Tüm Komutları Gösterir.',
  usage: 'kullanıcı'
};