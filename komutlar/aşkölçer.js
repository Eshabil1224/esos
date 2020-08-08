exports.run = async (client, msg, args) => {
    let ask=[
      "Aşkölçer %3 Sen Buna Aşkmı Diyorsun?.",
      "Aşkölçer %6 Biraz Gayret Bee.",
      "Aşkölçer %9 Onunla Daha Çok Vakit Geçirmelisin.",
      "Aşkölçer %12 Bu Eskiye Göre İyi.",
      "Aşkölçer %18 İyi Gidiyorsunuz Yakında Olcak.",
      "Aşkölçer %20 Eh İşte Fena Değil.",
      "Aşkölçer %23 Gün Geçtikce Seveceksin Az Zaman Tanı Kendine.",
      "Aşkölçer %26 Hıhı Oluyor.",
      "Aşkölçer %29 Vay Be Nerden Nereye.",
      "Aşkölçer %30 Sanki Sevmeye Başladın Onu.",
      "Aşkölçer %40 Evet evet Olcak Böle Devam.",
      "Aşkölçer %50 Sanki Hala Az Gibi he?.",
      "Aşkölçer %60 Daha İyi Değer Hakediyor Bence.",
      "Aşkölçer %70 Kalbinin Yarısı Onda Şuan.",
      "Aşkölçer %73 Merak etme Oda Seni Seviyor.",
      "Aşkölçer %76 Biliyorum Sende Onu Seviyorsun.",
      "Aşkölçer %79 Sizi Gidi Sizi.",
      "Aşkölçer %82 Onun Aklından Çıkamıyorsunki.",
      "Aşkölçer %85 Az Daha Dewam Böle.",
      "Aşkölçer %88 Seviyorsunuz İśte Birbirinizi yalan Söyleme.",
      "Aşkölçer %90 Bukadarcıkmı? Daha iyi Sevebilirsin Mesla.",
      "Aşkölçer %91 Hoşlanacağından Emindim.",
      "Aşkölçer %92 Gayet İyi Gidiyor.",
      "Aşkölçer %93 Mükemmel.",
      "Aşkölçer %94 Ferhat Şirinimi Buluyor Yoksa .",
      "Aşkölçer %95 Seviliyosun Canısı <3.",
      "Aşkölçer %96 Aşk İyiki Varsın.",
      "Aşkölçer %97 Bence İyi Bi Hediye Hakediyor.",
      "Aşkölçer %98 Yakınlık Böle Bişey İste.",
      "Aşkölçer %99 Az Kaldı.",
      "Aşkölçer %100 Mükemmel Aşıklarsınız.",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (':no_entry_sign: Kimi Seviyorsun?')
  }});
  
  
  
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)
    }})
    }
  
  
  }
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['aşk'],
    permLevel: 0
   };
  
  exports.help = {
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }
