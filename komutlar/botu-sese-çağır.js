exports.run = async (client, message) => {
if(!message.member.roles.has("710655612010102797")) return message.channel.send(`Bu Komutu Kullanabilmek İçin Yönetici Yetkisine Sahip Olmalısınız.`); // Developer By FriaStyla
  const voiceChannel = message.member.voiceChannel;
  if (!message.member.voiceChannel) { return message.channel.send("Beraber Yargı Dağıtabilmemiz İçin Ses Kanalına Giriş Yapmalısın :D"); }
  const permissions = message.member.voiceChannel.permissionsFor(message.guild.me);
  if (permissions.has("CONNECT") === false) { return message.channel.send("Odaya girmek için yetkim yok amk"); }
  message.member.voiceChannel.join();
  return message.channel.send(`Anti-DDoS Özelliğim Şu Anda Aktif ${message.member.voiceChannel} Kanalında Yargı Dağıtmak İçin Emrini Bekliyorum.`);
};
exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ['katıl','join'],
  permLevel: 4,
  botPerms: [],
  requiredFuncs: [],
};
exports.help = {
  name: "gir",
  description: "Bot müzik kanalına giriş yapar.",
  usage: "gir",
  usageDelim: "",
};