const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
exports.run = async(client , message , args) => {
function embed(desc) {
var embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.avatarURL)
.setDescription(desc)
.setFooter("Kirox 💗 Lelouch")
.setTimestamp()
message.channel.send(embed)
}
  if(message.channel.id !== ayarlar.kayıtchat) return embed(`<a:x_:701447003221000316> Bu Komut Sadece <#${ayarlar.kayıtchat}> kanalında kullanılabılır !`)
if(!message.member.roles.has(ayarlar.kayıtcırolid)) return embed(`<a:x_:701447003221000316> Bu Komutu Kuallabilmek için <@&${ayarlar.kayıtcırolid}> rolune ihtiyacın var !`)
let kullanıcı = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!kullanıcı) return embed(`<a:x_:701447003221000316> Kullanıcıyı Ka`)
let isim = args[1];
  let yaş = args[2];
 if(!isim) return embed(`<a:x_:701447003221000316> Bir Kullanıcıyı Kayıt Etmek İçin İsim Gerek Mal`);
 if(!yaş) return embed(`<a:x_:701447003221000316> Bir Kullanıcıyı Kayıt Etmek İçin İsim Gerek Mal`);
await kullanıcı.setNickname(`${isim} | ${yaş}`);
for(var i =0; i < ayarlar.erkekrolid.length; i++) {
await kullanıcı.addRole(ayarlar.erkekrolid[i])
}
  await kullanıcı.removeRole(ayarlar.kayıtsızrolid)
  embed(`
  **Bir Kullanıcı Kayıt Edildi !**
<a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933>
  **<a:ss:744671328736510042> Kayıt Edilen Kullanıcı : **${kullanıcı}

  **<a:ss:744671328736510042> Kayıt Eden Yetkili : **${message.author}

  **<a:ss:744671328736510042> Verilen Rol : **<@&${ayarlar.erkekrolid}>

  **<a:ss:744671328736510042> Alınan Rol : **<@&${ayarlar.kayıtsızrolid}>
<a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933><a:ss:744665677532495933>
  `)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["e" , "man" , "m"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'erkek',
  };