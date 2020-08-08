const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  if(!message.member.roles.has("710779948532760627")) return message.channel.send("Bu komutu kullanabilmek için `Name Changer` yetkisine sahip olmalısınız.");
  let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  if (!member) return message.channel.send('Bir Üye Etiketlemelisin Knka')
  if (!isim) return message.channel.send('Bir İsim Yazmalısın Knka')
  member.setNickname(`${isim}`)
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField(`• Kullanıcının Takma Adı Değiştirildi.`, `<a:check:721156693219868682> Değiştirilen Kullanıcı : ${member.user} \n<a:check:721156693219868682> Düzenlenen Kullanıcı Adı : \`${isim}\``)
  .setFooter(`Komutu Kullanan Yetkili : ${message.author.username}`)  
  .setThumbnail(client.user.avatarURL)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['isim','nick'],
  permLevel: 0
}
exports.help = {
  name: 'isim',
  description: "İsim değiştirmeye ne dersin yakışıklı",
  usage: 'isim <yeni nick>'
}