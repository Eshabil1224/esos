const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, msg) => {

  var user = msg.mentions.users.first() || msg.author;
  var id = user.id
  var gid = msg.guild.id;

  
  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);

  
  var resimler = {
  "level": "https://g.hizliresim.com/kar-parsi",
}    
  
var Canvas = require('canvas')


var avatarr = user.displayAvatarURL
var { createCanvas, loadImage } = require('canvas')
var canvas = createCanvas(750, 300)
var cfx = canvas.getContext('2d');
loadImage(resimler.level).then(level => {
loadImage(avatarr).then(avatar => {
cfx.drawImage(level, 0, 0, 750, 300);


cfx.beginPath()
cfx.fillStyle = "#b9bbbe";
  
cfx.font = '32px sans-serif';
cfx.textAlign = "left";
cfx.fillText(`${user.tag}`, 210, 245)
cfx.font = '30px sans-serif';
cfx.textAlign = "left";
  cfx.fillStyle = "#ffffff";
cfx.fillText(`${xp || 0} / 250`, 590, 70)
cfx.font = '34px sans-serif';
cfx.textAlign = "right";
    cfx.fillStyle = "#000000";
cfx.fillText(`${lvl || 0} Seviye`, 575, 70);
cfx.beginPath();
cfx.lineWidth = 8;
cfx.fill()
cfx.lineWidth = 8;
cfx.arc(55 + 80, 80 + 80, 80, 0, 2 * Math.PI, false);
cfx.clip();
cfx.drawImage(avatar, 55, 80, 160, 160);
  
msg.channel.send(new Discord.Attachment(canvas.toBuffer(), "cassielevel.png"))
})}) 
  
  
  
  
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['seviye'], 
  permLevel: 0,
};

exports.help = {
  name: 'seviye', 
  description: 'CODEFENIX KOD PAYLASIM', 
  usage: 'seviye @kullanıcı'
};