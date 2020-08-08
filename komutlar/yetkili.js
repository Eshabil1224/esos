const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setTitle("**--**> Yetkili Komutları <**--**")
 .setAuthor("Leviathan", client.user.avatarURL)
 .setColor("BLUE")
 .setDescription(`

isim: Belirttiniz Kişinin İsmini Değiştirir.
ban: Belirttiniz Kullanıcıyı Sunucudan Yasaklar.
softban: Kullanıcının Önce Mesajlarını Siler Sonra Banlar.
kick: Belirtilen Kullanıcıyı Sunucudan Atar.
mute: Belirttiniz kullanıcıyı Sunucuda Susturur.
logayarla: Mod-Log Kanalını Ayarlarsınız.
sil: Belirtilen Msj'ı Siler.[1/400]
uyar: Belirtilen kullanıcıyı Uyarır.
yavaş-mod: Bulunduğunuz Kanalın Süre Limitini Ayarlar.
duyuru: Duyuru Yaparsınız.
rolver: Belirttiniz Kullanıcıya Belirttiniz Rolü Veririr.
rolal: Belirttiniz Kullanıcıdan Belirttiniz Rolü Alır.
çekiliş: Çekiliş mi? Sunucuda Güzel Şeyler Olcak <3
kilit: Hangi Kanalda Yazdıysanız O Kanalı Belirtilen Süre Kilitler.
reklam-engel: Sunucuda Reklam Yapılmasını Engeller.
küfür-engel: Sunucuda Küfürü Yasaklar.
reklam-isim-ban: Sunucuya Gelen Kişinin Adında Reklam Varsa Otomatik Banlar.
utemizleme: Sohbeti Kirlerden Arındırır.
botkoruma: Sunucunuzu İstenmeyen Botlardan Korur.
giriş-izni: Bot Korumayı Kapamadan Getirmek İstediğiniz Botun Idsini Yazarak Sunucuya Ekleyebilirsiniz.
rolrenk: Belirttiniz Rolün Rengini Değiştirir.
sayaç: Sayaç Ayarlarsınız. [Kullanım: .sayaç #✅│sayaç 50]
sayaç-sıfırla: Sayacı Sıfırlarsınız.
otorol: Belirtilen Rolü Sunucuya Gelen Kişiye Otomatik Verir.
ototag*l: Üyeler Servere Girince Belirlediniz Tagı Alır.
giriş-çıkış-ayarla: Resimli Hg-Bb Ayarlar.
güvenlik: Sunucuya Gelen Kişilerin Güvenli Olup Olmadığını Göürsünüz.
unbanall: Sunucudaki Tüm Yasakları Kaldırır.
go kur: Geçici Oda Sistemini Kurarsınız.
go sıfırla: Geçici Oda Sistemini Sıfırlarsınız [Kapatırsınız].
server-panel: Sunucu İstatistiklerini Gosteren Kanallar Açarsınız.
server-panel sıfırla: Sunucu İstatistiklerini Gösteren Kanalları Sıfırlarsınız [Kapattırsınız].
yedek-al: Bu Özellik Sayesinde Yedek Alabileceksiniz.
yedek-yükle: Aldığınız Yedeği Yükler.
kanalkoruma: Bu Komutu Kullanarak Sunucu Kanallarınızı Koruyabilirsiniz.
kanalkoruma-log: Kanalları Silince Bildirimin Gideceği Yer.
kanalkoruma-rol: Kanalları Silince 3 Uyarıdan Sonra Alacağı Rol.


`)
 
 
 .setFooter("Leviathan", client.user.avatarURL)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yetkili"],
  permLevel: 0
};

module.exports.help = {
  name: 'yetkili',
  description: 'Tüm Komutları Gösterir.',
  usage: 'yetkili'
};