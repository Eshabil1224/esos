const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');


exports.run = async (client, message, args) => {
  



  let user = message.author
    var sikkepuan = await db.fetch(`cfxkredipuan${user.id}`)
  
      const rakun2 = new Discord.RichEmbed().setDescription(`Tebrikler **5000** Para 💰 Çıktı Vay BEEE \nMevcut Paran: **${sikkepuan}**`).setColor("#c987ff")
      const rakun33 = new Discord.RichEmbed().setDescription(`**500** Para 💰 Çıktı Bir Zararın Yok \nMevcut Paran: **${sikkepuan}**`).setColor("#c987ff")
      const rakun444 = new Discord.RichEmbed().setDescription(`Tebrikler **0** para 💰 Çıktı Zarardasın \nMevcut Paran: **${sikkepuan}**`).setColor("#c987ff")
      const rakun445 = new Discord.RichEmbed().setDescription(`Tebrikler **0** para 💰 Çıktı Zarardasın \nMevcut Paran: **${sikkepuan}**`).setColor("#c987ff")
      const rakun446 = new Discord.RichEmbed().setDescription(`Tebrikler **0** para 💰 Çıktı Zarardasın \nMevcut Paran: **${sikkepuan}**`).setColor("#c987ff")
      const rakun447 = new Discord.RichEmbed().setDescription(`Tebrikler **0** para 💰 Çıktı Zarardasın \nMevcut Paran: **${sikkepuan}**`).setColor("#c987ff")
      const rakun448 = new Discord.RichEmbed().setDescription(`Tebrikler **0** para 💰 Çıktı Zarardasın \nMevcut Paran: **${sikkepuan}**`).setColor("#c987ff")
      const rakun449 = new Discord.RichEmbed().setDescription(`Tebrikler **0** para 💰 Çıktı Zarardasın \nMevcut Paran: **${sikkepuan}**`).setColor("#c987ff")



// yardım menüsüne ekle | kasa-aç bu kadarmi? yo
            
var kasa = [       
   "kasa1",
    "kasa2",
    "kasa3",
    "kasa4",
    "kasa5",
    "kasa6",
    "kasa7",
    "kasa8"
    
];


let cfxpuan = await db.fetch(`cfxkredipuan${user.id}`)

if (cfxpuan < 200) return message.channel.send(`:x: Kasa açmak için önce **200** den fazla paran olmalı \nMevcut Paran: **${sikkepuan || 0}**`)

if (cfxpuan > 200) {

  
   var kazandigi = kasa[Math.floor(Math.random() * kasa.length)]; 
  
const cfx = new Discord.RichEmbed()
.setColor("#c987ff")
.setDescription(`Rakun Sikke Kasası Açıldı 💰 **200** Paranı Hesabından Çektim \nGeriye Kalan Paran: **${sikkepuan || 0}**`)
message.channel.send(cfx)
db.add(`cfxkredipuan${user.id}`, -200)
  if (kazandigi == 'kasa1') return message.channel.send(rakun2) - db.add(`cfxkredipuan${user.id}`, 5000)
  if (kazandigi == 'kasa2') return message.channel.send(rakun33) - db.add(`cfxkredipuan${user.id}`, 500)
  if (kazandigi == 'kasa3') return message.channel.send(rakun444) - db.add(`cfxkredipuan{user.id]`, 0)
  if (kazandigi == 'kasa4') return message.channel.send(rakun445) - db.add(`cfxkredipuan{user.id]`, 0)
  if (kazandigi == 'kasa5') return message.channel.send(rakun446) - db.add(`cfxkredipuan{user.id]`, 0)
  if (kazandigi == 'kasa6') return message.channel.send(rakun447) - db.add(`cfxkredipuan{user.id]`, 0)
  if (kazandigi == 'kasa7') return message.channel.send(rakun448) - db.add(`cfxkredipuan{user.id]`, 0)
  if (kazandigi == 'kasa8') return message.channel.send(rakun449) - db.add(`cfxkredipuan{user.id]`, 0)

}


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kasa-aç',
  description: 'sikiş',
  usage: 'sikiş'
};
