const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
exports.run = async(client , message , args) => {
function embed(desc) {
var embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setDescription(desc)
.setThumbnail(message.author.avatarURL)
.setFooter("Kirox 💗 Lelouch")
message.channel.send(embed)
}
if(!message.member.roles.has(ayarlar.jailrolid)) return embed(`<a:x_:701447003221000316> Bu Komutu Kuallabilmek için <@&${ayarlar.jailrolid}> rolune ihtiyacın var !`)
let kullanıcı = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!kullanıcı) return embed(`<a:x_:701447003221000316> Bir Kullanıcıyı Kayıt Etmek İçin Kullanıcı Gerek Mal`)
  let sebep = args[1];
  if(!sebep) return
    embed(`Lütfen bir **sebep** girerek yeniden dene !`)
await kullanıcı.setRoles([ayarlar.jailrolid])
  embed(`
  **${message.author} adlı yetkili ${kullanıcı} adlı kullanıcıyı ${sebep} nedeniyle jail 'e atdı.**
  `)
  let log = message.guild.channels.get(ayarlar.jaillogid)
log.send(
new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setDescription(`**${message.author} adlı yetkili ${kullanıcı} adlı kullanıcıyı ${sebep} nedeniyle jail 'e atdı.**`)
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