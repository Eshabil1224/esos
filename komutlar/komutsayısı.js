const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
  message.delete(3000)

    const codefenixkodpaylasim = new Discord.RichEmbed()
    .setTitle("_**```Yüklenen Komut Miktarı.```**_")
    .setDescription('**\nLeviathan**' + `\`${client.commands.size}\`` +  '** Adet Komutu Yönetiyor!**')
    .setColor("#c987ff")
    .setThumbnail(client.user.avatarURL)
    .setFooter(`${message.author.username} Tarafından Kullanıldı!`, message.author.avatarURL);

    return message.channel.send(codefenixkodpaylasim);
    
    message.channel.send();
};

exports.conf = {
  enabled: true,
  aliases: ['totalcommands'],
  guildOnly: false,
  permLevel: 4
};

exports.help = {
  name: 'komutsayısı',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'komutsayısı'
};


// BU KOD CFX KOD PAYLASIM TARAFINDAN YAZILMISTIR IZINSIZ PAYLASILMASI YASAKTIR ILETISIM: support@codefenix.dx.am // CFX IYI GUNLER DILER //