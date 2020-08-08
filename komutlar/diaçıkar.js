const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
     
 
let aydi = args[0]
let dia = message.guild.members.get(args[0]);
let cfxz = message.guild.roles.find(cfxz => cfxz.name === "Diamond");
  
  const cfx = new Discord.RichEmbed()
  .setColor("#c987ff")
  .setDescription(`**${dia}** Artık **[ Gold Üye ]** Değil!`)
  .setThumbnail(``)
  
  message.channel.send(cfx);
      
  if (!aydi) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.delete(`cfxz${aydi}`)
  await(dia.removeRole(cfxz.id));
  message.channel.send(cfx)
}
exports.conf = { enabled: true, guildOnly: false, aliases: [], permLevel: 4 };
exports.help = { name: 'diaçıkar' };