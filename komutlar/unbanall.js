const Discord = require('discord.js'); 

exports.run = (client, message, args) => {

   message.channel.send('✅ **İşlem Başarılı!\n✅ Sunucudaki Tüm Yasakları Kaldırdım!**')

  message.guild.fetchBans().then(bans => {
      bans.forEach(user => {
        message.guild.unban(user)
      });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ub","banlarıkaldır"],
  permLevel: 3
};

exports.help = {
  name: 'unbanall',
  description: 'Sunucudaki Tüm Yasaklı Kullanıcıların Yasağını Kaldırır!',
  usage: 'Owner / Kod Paylaşım'
}; 