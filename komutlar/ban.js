const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
exports.run = async(client , message , args) => {
function embed(desc) {
var embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setDescription(desc)
.setFooter("Kirox 💗 Lelouch")
message.channel.send(embed)
}
if(!message.member.roles.has(ayarlar.banrolid)) return embed(`<a:x_:701447003221000316> Bu Komutu Kuallabilmek için <@&${ayarlar.banrolid}> rolune ihtiyacın var !`)
let kullanıcı = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!kullanıcı) return embed(`<a:x_:701447003221000316> Bir Kullanıcıyı Kayıt Etmek İçin Kullanıcı Gerek Mal`)
  let sebep = args[1];
  if(!sebep) return
    embed(`Lütfen bir sebep girermisin`)
await kullanıcı.ban()
  embed(`
  **${message.author} adlı yetkili ${kullanıcı} adlı kullanıcı ${sebep} sebebiyle banladı !**
  `)
  let log = message.guild.channels.get(ayarlar.banlogid)
log.send(
new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setDescription(`**${message.author} adlı yetkili ${kullanıcı} adlı kullanıcı ${sebep} sebebiyle banladı !**`)
.setFooter("Kirox 💗 Lelouch")
)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'jail',
  };