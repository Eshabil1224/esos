const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setTitle("**--**> Bot Komutları <**--**")
 .setAuthor("Leviathan", client.user.avatarURL)
 .setColor("BLUE")
 .setDescription(`

help: Yardım Komutunu Açar.
ping: Botun Pingini Gösterir.
komutsayısı: Botta Kaç Adet Komut Oluğunu Belirtir.
istatistik: Botun Bilgilerini Gösterir.
yaz: İstediğiniz Şeyi Bota Yazdırır.
sunucutanıt: Sunucunuzu Destek Sunucusunda Tanıtır.
afk: Afk Olursunuz.
songörülme: Etiketlenen Kişinin Son Görülme Durumunu Gössterir.
emoji: Sunucudaki Emojileri Ve ıd'lerini Gösterir.
nsfw-rol: Bu Rölü alarak Özel Odaları Görebilirsiniz.
prefix-ayarla: Sunucunuza Özel Prefix Ayarlayabileceksiniz.
destek: Kafanıza Takılan Bir Soru Varsa Destek Yazarak Yardım Alabilirsiniz.
hata: Çalışmayan Kodları Bildirerek Botun Gelişmesinde Bize Yardımcı Olabilirsiniz.
seviye: Sunucudaki Rankınızı Gösterir.
sunucu-pp: Sunucunuzun Resmini Gösterir.

`)
 
 
 .setFooter("Leviathan", client.user.avatarURL)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-komut"],
  permLevel: 0
};

module.exports.help = {
  name: 'bot-komut',
  description: 'Tüm Komutları Gösterir.',
  usage: 'bot-komut'
};