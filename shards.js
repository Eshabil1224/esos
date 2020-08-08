const Discord = require('discord.js');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./bot.js', {// Ana dosyanızın adını yazınız.
    totalShards: 'auto',
    token: "NjM0NDQ4NjMyNzA3NDE2MDk0.XbQ2SA.MQmh-ZD6u5XdtAakFLNsSKa7lPc"// Buraya tokeninizi yazınız.
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID shard started.`)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);