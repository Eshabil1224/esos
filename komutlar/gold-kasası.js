const Discord = require('discord.js');
const db = require ('quick.db')
exports.run = async(client, message, args) => {
    if(message.guild.id !== "710651073169457192") return message.channel.send(":x: Bu Komudu Sadece destek Sunucusunda Kullanabilirsin")//serverin Idsini yaz
// ayarladım | rol oluşturup id sini alta yazcan message.member.addRole(rolid)
 let user = message.author
      const rakun2 = new Discord.RichEmbed().setDescription(`Tebrikler Kalıcı [∞] Gold Of Leviathan Rolü Kazandınız , SS Alıp Yetkililere Bildiriniz...`).setColor("#c987ff")
      const rakun3 = new Discord.RichEmbed().setDescription(`Tebrikler 2 Days Zeus Of Leviathan [ Üst Yönetim ] Rolü Kazandınız , SS Alıp Yetkililere Bildiriniz...`).setColor("#c987ff")
      const rakun4 = new Discord.RichEmbed().setDescription(`Tebrikler 1 Days God Of Leviathan [ Kurucu ] Rolü Kazandınız , SS Alıp Yetkililere Bildiriniz...`).setColor("#c987ff")
      const rakun5 = new Discord.RichEmbed().setDescription(`Tebrikler 5 Days Penthos Of Leviathan [ Yetkili ] Rolü Kazandınız , SS Alıp Yetkililere Bildiriniz...`).setColor("#c987ff")
      
  var sikkepuan = await db.fetch(`cfxkredipuan${user.id}`)            

var kasa = [       
   "kasa1",
   "kasa2",
   "kasa3",
   "kasa4",
];


let cfxpuan = await db.fetch(`cfxkredipuan${user.id}`)

if (cfxpuan < 50000) return message.channel.send(`:x: Kasa açmak için önce **50000** den fazla Paran olmalı Mevcut Paran **${sikkepuan || 0}**`)

if (cfxpuan > 50000) {

  
   var kazandigi = kasa[Math.floor(Math.random() * kasa.length)]; 
  
const cfx = new Discord.RichEmbed()
.setColor("#c987ff")
.setDescription(`Leviathan Gold Kasası Açıldı 💰 **50000** Paranı Hesabından Çektim \n Geriye Kalan Paran: **${sikkepuan || 0}**`)
message.channel.send(cfx)
db.add(`cfxkredipuan${user.id}`, -50000)
message.member.addRole('719625424505929896')
  if (kazandigi == 'kasa1') return message.channel.send(rakun2) - db.add(`cfxkredipuan{user.id]`, 0)
  if (kazandigi == 'kasa2') return message.channel.send(rakun3) - db.add(`cfxkredipuan{user.id]`, 0)
  if (kazandigi == 'kasa3') return message.channel.send(rakun4) - db.add(`cfxkredipuan{user.id]`, 0)
  if (kazandigi == 'kasa4') return message.channel.send(rakun5) - db.add(`cfxkredipuan{user.id]`, 0)
}
};

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: ['gold-kasası' , 'gold-kasa' , 'gold-case'],
  permLevel: 0
};

exports.help = {
  name: 'gold-ol',
  description: 'FBI',
  usage: 'Fbi Geldi aç kapıyı',
};