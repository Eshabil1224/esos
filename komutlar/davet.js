const Discord = require("discord.js");

exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`**Sende Beni Sunucunda Görmek İstersen Tıkla**: https://is.gd/X3WJYa`);
    message.channel.send(embed);
  });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Sunucu Davetini Verir.',
  usage: 'davet'
};