const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {  
let geciciodakategori = await db.fetch(`cfxgok${message.guild.id}`);
let gecicodakanal = await db.fetch(`cfxgokanal${message.guild.id}`)
let geciciodakategorietiket = `KategoriAdı`
let geciciodakanaletiket = `SesKanalı`;
if(!args[0]) return message.channel.send(`Bu Komutu Kullanabilmek İçin ``Kanalları Yönet`` Yetkisine Sahip Olman Gerek :/`)
if (args[0] == 'sıfırla') {
  db.delete(`cfxgok${message.guild.id}`)
  db.delete(`cfxgokanal${message.guild.id}`)
  let kanal1 = message.guild.channels.find('name', 'Sohbet-Oluştur')
  let kanal2 = message.guild.channels.find('name', 'Geçici-Oda-Sistemi')
  kanal1.delete();
  kanal2.delete();
return message.channel.send(`Sistem Sıfırlandı Kanallar Başarıyla Silindi.`)
}
if(args[0] == 'kur'){
  message.guild.createChannel(`Geçici-Oda-Sistemi`, "category").then(CFX => {
    let cfx2 = message.guild.channels.find("name", "Geçici-Oda-Sistemi")
    let cfx3 = message.guild.channels.find('id', cfx2)      
      message.guild.createChannel(`Sohbet-Oluştur`, "voice").then(CFX => {
        let cfx5 = message.guild.channels.find('name', 'Sohbet-Oluştur');
         let cfx4 = message.guild.channels.find('id', cfx5)
CFX.setParent(cfx2)
db.set(`cfxgok${message.guild.id}`, cfx3)
db.set(`cfxgokanal${message.guild.id}`, cfx4)
return message.channel.send(`Kategori <Geçici-Oda-Sistemi> Kanal <Sohbet-Oluştur> Olarak Ayarlandı.`)

 }) }) } }
exports.conf = { enabled: true, guildOnly: false,  aliases: ['go'], permLevel: 3 };
exports.help = { name: 'gecicioda', bu_kod_codefenix_tarafindan_kodlanmistir_izinsiz_paylasilmasi_yasaktir: 'CODEFENIX KOD PAYLASIM'};
