const Discord = require('discord.js');

exports.run = (client, message, args) => {
	
    message.channel.send(`**✔️ Bot Yeniden Başlatıldı**`).then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rb'],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};
