const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');


exports.run = async (client, message, args) => {
  if (message.channel.id != "720428685244497981") return message.reply(':x: Bunu Sadece Destek sunucusunda [ https://discord.gg/brzTqZ3 ] Kullanabilirsin #kredi-çek odasına .krediçek yazınız');
  //kanalın İD 'sini Gir
  
  let user = message.author
  
      const rakun2 = new Discord.RichEmbed().setDescription(`Başarıyla Kredi Çektiniz Hesabınıza **500** Owner Sikkesi Yerleştirildi.`).setColor("#c987ff")




            

var kasa = [       
   "kasa1",
    
];


let cfxpuan = await db.fetch(`cfxkredipuan${user.id}`)

  
   var kazandigi = kasa[Math.floor(Math.random() * kasa.length)]; 
  
const cfx = new Discord.RichEmbed()
  if (kazandigi == 'kasa1') return message.channel.send(rakun2) - db.add(`cfxkredipuan${user.id}`, 500)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kredi-çek'],
  permLevel: 0
};

exports.help = {
  name: 'krediçek',
  description: '',
  sadasda: 'asdas'
}; // yasinateş54 katkılarıyla