const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let prefix =
    (await require("quick.db").fetch(`prefix_${message.guild.id}`)) ||
    ayarlar.prefix;

  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send(
      `❌ Bu Komutu Kullanabilmek için "\`Kanalları Yönet\`" Yetkisine Sahip Olmalısın!`
    );

  if (!client.lockit) client.lockit = [];
  let time = args.join(" ");
  let validUnlocks = ["release", "unlock"];
  if (!time)
    return message.channel.send(
      `❌ **Bir Süre Belirtmelisin! Max. 24 Gün** \n\`Örnek: ${prefix}kilit 1m\``
    );

  if (validUnlocks.includes(time)) {
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null
      })
      .then(() => {
        message.channel.send(`Kanalın Kilidi Açıldı!`);
        clearTimeout(client.lockit[message.channel.id]);
        delete client.lockit[message.channel.id];
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.channel
          .send(`Kanal Kilitlendi! | **Süre: ${ms(ms(time))}**`)
          .then(() => {
            client.lockit[message.channel.id] = setTimeout(() => {
              message.channel
                .overwritePermissions(message.guild.id, {
                  SEND_MESSAGES: null
                })
                .then(message.channel.send(`Kanalın Kilidi Açıldı!`))
                .catch(console.error);
              delete client.lockit[message.channel.id];
            }, ms(time));
          })
          .catch(error => {
            console.log(error);
          });
      });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kilitle", "kilit"],
  permLevel: 0
};

exports.help = {
  name: "kanalkilit",
  description: "Komutu kullandığınız kanalı belirttiğiniz süre kilitler.",
  usage: "kanalkilit <süre>"
};