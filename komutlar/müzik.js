const Discord = require('discord.js');
const ayarlar = require('moment');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setDescription("**--**> Cyclops Müzik Komutları <**--**")
  .addField('Çal','\```Kullanım : .play \``` ' )
  .addField('Geç','\```Kullanım : .skip\``` ' ) 
  .addField('Dur','\```Kullanım : .stop\``` ' ) 
  .addField('Ses','\```Kullanım : .volume \``` ' ) 
  .addField('Çalan','\```Kullanım : .onplaying\``` ' ) 
  .addField('Sıra','\``` Kullanım : .queue\``` ' ) 
  .addField('Duraklat','\```Kullanım : .pause\``` ' ) 
  .addField('Devam','\```Kullanım : .resume\``` ' ) 
  .addField("Leviathan İyi Eğlenceler Diler <3",`** **`)
      .setColor(0x00ffff) 
  message.channel.send(embedyardim);
   } 
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['müzik'],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Moderasyon Komutları Gösterir.',
  usage: 'müzik'
};