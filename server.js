const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready" , () => {
  console.log(client.user.username)
  client.user.setStatus("dnd");
  client.user.setActivity("Qawx ❤️ G L O R Y");
});

client.guvenlikullanıcılar = ["568789531747155988" , "713701344677986395" , "508312880165290014" , "648794027516493834"]


client.on("roleDelete" , async role => {
   let logkanalid = "749593174179315782"
  const entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first()); 
      let kullanıcı = role.guild.members.get(entry.executor.id);  
  let log = role.guild.channels.get(logkanalid);

      if(kullanıcı.id === client.user.id) return;
  if(client.guvenlikullanıcılar.some(x => kullanıcı.id === x)) return;
   await kullanıcı.ban();
   
        if(log) log.send( new Discord.RichEmbed()
                  .setDescription(`${kullanıcı} adlı kullanıcı bir ban **atdığı ** için banlandı.`)
   .setColor('BLACK')
 ) 
})
client.on("channelDelete" , async channel => {
   let logkanalid = "749593174179315782"
  const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first()); 
      let kullanıcı = channel.guild.members.get(entry.executor.id);  
  let log = channel.guild.channels.get(logkanalid);

      if(kullanıcı.id === client.user.id) return;
  if(client.guvenlikullanıcılar.some(x => kullanıcı.id === x)) return;
   await kullanıcı.ban();
   
        if(log) log.send( new Discord.RichEmbed()
                  .setDescription(`${kullanıcı} adlı kullanıcı bir ban **atdığı ** için banlandı.`)
   .setColor('BLACK')
 ) 
})
client.on('guildMemberAdd' , async member => {
  if(member.user.bot) {
    const entry = await member.guild.fetchAuditLogs({type: 'BOT_ADD'}).then(audit => audit.entries.first()); 
      let kullanıcı = member.guild.members.get(entry.executor.id);  


      if(kullanıcı.id === client.user.id) return;
  if(client.guvenlikullanıcılar.some(x => kullanıcı.id === x)) return;
   await kullanıcı.ban();

  }
});
client.login("NzM1MTA0MDk2NjkyMDc2NTk0.XxbZCg.rceP3znsdb_d11K4_Tof3TCUrzI")