const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
exports.run = async(client , message , args) => {
function embed(desc) {
var embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setDescription(desc)
.setThumbnail(message.guild.iconURL)
.setFooter("Kirox 💗 Lelouch")
message.channel.send(embed)
}
  embed(`
  **<a:zmrt:744612224428933132> Sunucudaki Toplam Üye Sayısı : \`${message.guild.memberCount}\`**
  
  **<a:zmrt:744612224428933132> Sunucudaki Aktif Üye Sayısı : \`${message.guild.members.filter(r => r.user.presence.status === "online").size}\`**
  
  **<a:zmrt:744612224428933132> Sunucudaki Tagli Üye Sayısı : \`${message.guild.members.filter(r => r.user.username.includes(ayarlar.tag)).size}\`**
    
  **<a:zmrt:744612224428933132> Sunucudaki Sesteki Üye Sayısı : \`${message.guild.members.filter(r => r.voiceChannel).size}\`**
  
  **<a:zmrt:744612224428933132> Sunucudaki Booster Üye Sayısı : \`${message.guild.members.filter(r => r.roles.has(ayarlar.boosterrol)).size}\`**
  `)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["s"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'say',
  };