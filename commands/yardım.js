const Discord = require('discord.js');
exports.run = (client, message, args) => {
 
  const embed = new Discord.MessageEmbed()
  .setColor("#ff0000")
       .setDescription(`**𐌞anity • #2021 Komutlar**

 ** .kullanıcı ┃ .eğlence **
`)
.setImage(`https://media.giphy.com/media/Sk2AGyuvdqYnSJpaW6/giphy.gif`)

  message.channel.send(embed)
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};
exports.help = {
  name: 'yardım',
  description: 'yardım',
  usage: 'yardım'
};


