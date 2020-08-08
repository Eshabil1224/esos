const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setTitle("**--**> Bot Sahip Komutları <**--**")
 .setAuthor("Leviathan", client.user.avatarURL)
 .setColor("BLUE")
 .setDescription(`

gir: Bot Bulunduğunuz Kanalda Yargı Dağıtmak İçin Emir Bekler :D
ayrıl: Bu Komutu Kullandığınız Sunucudan Botu Atar.
reboot: Botu Yeniden Başlatır.
reklam-taraması: Kullanıcıların Oynuyor Bölümünü Ve Kullanıcı Adlarındaki Reklamları Tarar.
özelmesaj: Belirtilen Kullanıcıya Özel Msj Yollar.
yazıkanalaç: Yazı Kanalı Açar.
seskanalaç: Ses Kanalı Açar.
diayap: Belirtilen Kullanıcıyı Gold Üye Yapar.
diaçıkar: Belirtilen Kullanıcıyı Gold Üyeden Çıkarır.
karaliste: ID'sini Yazdınız Kullanıyı Karalisteye Alır Botu Hiç Bir Şekilde Kullanamaz.
bot-resim: Botun Resmini Komutla Değiştirir.
eval: Kod denemeye Yarar.
load: Yeni Eklenen Komutu Yükler.
reload: İstediğiniz Komutu Yeniden Başlatır.
unload: İstediğiniz Bir Komutu Devre Dışı Bırakır.
hata-kanal: Hatalı Kodun Bildirileceği Kanalı Ayarlarsınız.
`)
 
 
 .setFooter("Leviathan", client.user.avatarURL)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-sahip"],
  permLevel: 0
};

module.exports.help = {
  name: 'bot-sahip',
  description: 'Tüm Komutları Gösterir.',
  usage: 'bot-sahip'
};