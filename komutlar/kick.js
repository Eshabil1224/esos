const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('`Kullanıcıları At` yetkisine sahip olmalısın!')
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'ceza-takip-listesi');
  if (!modlog) return message.reply('`ceza-takip-listesi` kanalı oluşturman lazım.');
  if (reason.length < 1) return message.reply('Üyeyi Kickleme Sebebi Nedir Yazarmısın.');
  if (message.mentions.users.size < 1) return message.reply('Kimi Sunucudan Atacağımı Yazarmısın?.').catch(console.error);
 
  if (!message.guild.member(user).kickable) return message.reply('Üzgünüm Ama Yetkilileri Sunucudan Atamama İznim Yok.');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Sunucudan atma')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};