const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  // 1s = 1 saniye , 1m = 1 dakika , 1h = 1 saat, 1d = 1 gün

  let ownerkod = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!ownerkod)
    return message.channel.send(
      "✅ **Doğru Kullanım:** `+mute <@kullanıcı> <süre>"
    );
  if (ownerkod.hasPermission("MANAGE_GUILD"))
    return message.channel.send("⚠ | Yetkilileri Susturamam!");
  let umutb = message.guild.roles.find(r => r.name === "Muted");

  if (!umutb) {
    try {
      umutb = await message.guild.createRole({
        name: "Muted",
        color: "#4c6876",
        permissions: []
      });
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(umutb, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }
  
  let byumut = args[1];
  if (!byumut)
    return message.channel.send(
      "✅ **Doğru Kullanım:** `.mute <@kullanıcı> <sure>"
    );

  await ownerkod.addRole(umutb.id);
  message.channel.send(
    `✅ <@${ownerkod.id}> Susturuldu! | **Süre: ${ms(ms(byumut))}**`
  );

  setTimeout(function() {
    ownerkod.removeRole(umutb.id);
    message.channel.send(`✅ <@${ownerkod.id}> **Muten Sona Erdi!** `);
  }, ms(byumut));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["geçici-sustur", "gsustur", "mute", "sustur"],
  permLevel: 2
};

exports.help = {
  name: "geçici-sustur",
  description: "Sureli Susturur.",
  usage: "geçici-sustur [Kullanıcı] [Süre]"
};