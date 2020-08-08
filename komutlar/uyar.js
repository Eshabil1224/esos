const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (message.author.id != "727046674006147134") return message.reply('Bu komutu kullanamazsınız!');
      
   if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0x808080)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':fire: Üzgünüm, bunu yapamazsınız!')
  return message.author.sendEmbed(ozelmesajuyari); }  
  let guild = message.guild;
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Kimi uyarmam gerekiyor?').catch(console.error);
  message.delete();
  message.reply('Kişi, başarılı bir şekilde uyarıldı!')
  const embed = new Discord.RichEmbed()
  .setColor('0x808080')
  .setTitle(`**Yanlış giden, birşeyler var!**`)
  .setTimestamp()
  .setDescription('Kuralların, ihlali gerekçesi nedeni ile uyarıldınız!');
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['uyar',],
  permlevel: 2
};

exports.help = {
  name: 'dmuyarı',
  description: 'Belirtilen kullanıcıyı, uyarır!',
  usage: 'uyar'
};