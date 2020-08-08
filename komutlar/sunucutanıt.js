const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms')

let cooldown = 8.64e+7 //24 saat bilginize
exports.run = async (bot, message, args) => {
      let sure = await db.fetch(`cpsunucutnt_${message.guild.id}`)
      
      if (sure !== null && cooldown - (Date.now() - sure) > 0) {
        let timeObj = ms(cooldown - (Date.now() - sure))
      message.channel.send(`:x: Sunucunuz zaten tanıtılmış bir sonraki tanıtım için **${timeObj.hours} saat ${timeObj.minutes}** dakika beklemen Lazım Dostum :) `)
      } else {
      
      
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':x: yetkin yok')
  var channel = bot.channels.get('720409952182599720')
    const link = await bot.channels.get(message.channel.id).createInvite({ maxAge: 0})

  const ok = new Discord.RichEmbed()
  .setDescription("Sunucunuz [Destek Sunucum](https://discord.gg/brzTqZ3) da Tanıtıldı!")
  .setColor('yellow')
 message.channel.send(ok)
      const tnt = new Discord.RichEmbed()
  .addField('**» Server Sahibi: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
  .addField('**» Sunucu linki:**', link.url)
 .setThumbnail(message.guild.iconURL)
  .setColor('00000')
      channel.send(tnt)
        db.set(`cpsunucutnt_${message.guild.id}`, Date.now())
      }
    }

  

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'sunucutanıt',
  description: 'Sunucunuzu 24 saat sonra tekrar tanıtır.',
  usage: 'sunucutanıt'
}; 