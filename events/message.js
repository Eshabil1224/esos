const ayarlar = require('../ayarlar.json');
const sure = 2 //Komut bekleme süresi
const beklememesaji = `Bu komutu kullanabilmek için \`${sure}\` saniye kadar beklemelisin!` //Komut bekleme mesajı
const sahipbeklemesi = false //Sahip bekleme ayarı (false=kapalı, true=açık)
let yazma = new Set();

module.exports = message => {
  
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
    if (yazma.has(message.author.id)) {
      return message.channel.send(beklememesaji);
    }
  } else if (client.aliases.has(command)) {
    if (yazma.has(message.author.id)) {
      return message.channel.send(beklememesaji);
    }
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    if(sahipbeklemesi === false) {
      yazma.add(message.author.id);
    } if(sahipbeklemesi === true) {
      if(message.author.id === ayarlar.sahip) {
        cmd.run(client, message, params, perms);
        return true;
      }
    }
    setTimeout(() => {
      if(yazma.has(message.author.id)) {
        yazma.delete(message.author.id);
      }
    }, sure * 1000);
    cmd.run(client, message, params, perms);
  }

};
//komutkaraliste sistemi
const Ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const Discord = require('discord.js');

module.exports = async message => {
  
  let client = message.client;
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let cfxkaralistededb = await db.fetch(`cfxkaralistededb${message.author.id}`)
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
    if (!client.commands.has(command)) {
    if (client.aliases.has(command)) {
    } else {
    }
  }
  if (cmd) {
    if (cfxkaralistededb == 'karalistede') return message.channel.send(`\`${message.author.tag}\` Komut Kullanamazsın Karalistedesin.`);
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
};
