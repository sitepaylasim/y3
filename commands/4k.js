
const Discord = require('discord.js');
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();
const data = require('quick.db');


exports.run = async (client, message, args) => {
if(message.channel.nsfw == false) return message.channel.send(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setImage('https://support.discord.com/hc/article_attachments/360007795191/2_.jpg').setDescription(`${message.author} **Kanal __NSFW__ olarak aktif değil. Kontrol et!**`).setColor('#00001'))
DabiClient.nsfw.real.random().then(json => {
message.channel.send(new Discord.MessageAttachment(json.url));
data.set(`slm.${message.author.id}.${message.guild.id}.4k`, '𐌞anity • #2021');
setTimeout(() => {
data.delete(`slm.${message.author.id}.${message.guild.id}.4k`)
}, 1);
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: '4k'
};