const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');


exports.run = async (client, message, args) => {

let user = message.author
if (args[0] == '2000') {
  
  
 
const cfx = new Discord.RichEmbed()
.setColor("#c987ff")
.setDescription(`${user} Kullanıcısının hesabına ${2000} kredi eklendi`)
message.channel.send(cfx);
db.add(`cfxkredipuan${user.id}`, 2000)

}
}

// BU KOD SİSTEMİ DENEMEK AMACIYLA YAZILMISTIR !krediver 2000 yazıldıgında kendinize test amaclı 2000 kredi vermektedir.

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kredi"],
  permLevel: 4
};

exports.help = {
  name: 'krediver',
  description: 'CFX',
  bu_kod_codefenix_kod_paylasim_ekibi_tarafindan_yazilmistir_izinsiz_paylasilmasi_yasaktir: 'CODEFENIX KOD PAYLASIM'
};