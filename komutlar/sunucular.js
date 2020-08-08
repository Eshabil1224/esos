const Discord = require('discord.js');
exports.run = (client, msg, args) => {
    msg.channel.send(`Ben Şu An **${client.guilds.size}** Sunucuda Ve **${client.users.size}** Kullanıcıya Hizmet Veriyorum!`)   
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucular'],
  permLevel: 0
};

exports.help = {
  name: 'sunucular',
  description: 'Botun bulunduğu sunucuları gösterir.',
  usage: 'dve!sunucular'
};