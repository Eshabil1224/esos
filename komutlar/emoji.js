const Discord = require("discord.js");


exports.run = async (bot, message) => {
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('**Emojileri görmek için** `Rolleri Yönet` **yetkisine sahip olman gerek.**');
  var emojilerim = message.guild.emojis.array();
  if (!emojilerim || emojilerim === [])
      return message.reply("Sunucunda hiç emoji yok!");
  if (emojilerim.length > 1) {
    var sayfa = 1;
    var toplamsayfa = emojilerim.length;


    var cfxe1 = new Discord.RichEmbed()
      .setTitle("Emojilerin")
      .setDescription(`Emoji Adı | :${emojilerim[sayfa - 1].name}:`)
      .setImage(emojilerim[sayfa - 1].url)
      .setFooter(
        `Emoji ${sayfa}/${toplamsayfa} | ID: ${emojilerim[sayfa - 1].id} | \n Leviathan`
      )
      .setColor("0x00ff88");
      message.channel
      .send(cfxe1)
      .then(async function(sentEmbed) {
     //CodeFENIX //CFX
        const emojideistir = ["◀", "▶"];
        const filter = (reaction, user) =>
     //CodeFENIX //CFX 
          emojideistir.includes(reaction.emoji.name) &&
          user.id === message.author.id;
     //CodeFENIX //CFX 
        await sentEmbed.react(emojideistir[0]).catch(function() {});
        await sentEmbed.react(emojideistir[1]).catch(function() {});
     //CodeFENIX //CFX
        var reactions = sentEmbed.createReactionCollector(filter, {
          time: 300000
        });
        reactions.on("collect", async function(reaction) {
          await reaction.remove(message.author);
          if (reaction.emoji.name === "◀") {
            if (sayfa !== 1) {
              sayfa = sayfa - 1;
            }
      //CodeFENIX //CFX      
            else {
              sayfa = toplamsayfa;
            }
          }
      //CodeFENIX //CFX    
          else {
            if (sayfa !== toplamsayfa) {
              sayfa = sayfa + 1;
            } else {
              sayfa = 1;
            }
          }
         const cfxe2 = new Discord.RichEmbed()
            .setTitle("Emojilerin")
            .setDescription(`Emoji Adı | :${emojilerim[sayfa - 1].name}:`)
            .setImage(emojilerim[sayfa - 1].url)
            .setFooter(
              `Emoji ${sayfa}/${toplamsayfa} | ID: ${emojilerim[sayfa - 1].id} | \n Leviathan`
                      )
            .setColor("0x00ff88");
          sentEmbed.edit(cfxe2).catch(function() {});
        });
        reactions.on("end", () =>
          sentEmbed.edit("Süre Aşımı.")
        );
      })
      .catch(() => {
        message
          .reply("gönderilemedi!")
          .catch(() => {
            message.author
              .send(`Zaten çalışıyor ${message.channel}`)
              .catch(function() {});
          });
      });
  }
    //CodeFENIX //CFX
  else {
    let cfxe3 = new Discord.RichEmbed()
      .setTitle("Emojilerin")
      .setDescription(`Emoji Adı | :${emojilerim[0].name}:`)
      .setImage(emojilerim[0].url)
      .setFooter(`Emoji ${1}/${1} | ID: ${emojilerim[0].id} | \n Lavinia`)
      .setColor("0x00ff88");
    message.channel.send(cfxe3);
  }
};
  //CodeFENIX //CFX
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emoji"],
  permLevel: 0,
};
  //CodeFENIX //CFX
exports.help = {
  name: "emojiler",
  description: "CFX, sunucunuzdaki emojileri id ve name ve kendisi ile birlikte gösterir.",
  usage: "emojiler"
};