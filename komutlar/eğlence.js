const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setTitle("**--**> Eğlence Komutları <**--**")
 .setAuthor("Leviathan", client.user.avatarURL)
 .setColor("BLUE")
 .setDescription(`

kralol: Sunucunun Kralı Olursunuz.
tkm: Taş, Kağıt,Makas Oynarsınız.
1vs1: İyi Olan Kazansın ✓
xox: Hadi Bakalım :D
şanslısayım: Şanslı Sayınızı Belirler.
aşkölçer: Bakalım Ne Kadar Seviyorsun Onu <3
atombomb: Hiroşima vıııışşşş :D
nmtd: Dene Ve Gör :D
`)
 
 
 .setFooter("Leviathan", client.user.avatarURL)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eğlence"],
  permLevel: 0
};

module.exports.help = {
  name: 'eğlence',
  description: 'Tüm Komutları Gösterir.',
  usage: 'eğlence'
};