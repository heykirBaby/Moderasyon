const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
//-------------------------------------------------------------------------------\\
  
if(!["826486428023128144"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

//-------------------------------------------------------------------------------\\  
  
  
let cortex;
let cortex1 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
let cortex2 = message.guild.members.cache.get(args[0]);
if(!cortex1) return message.channel.send(new MessageEmbed().setTimestamp().setColor('RANDOM').setDescription(`Bir ID Girmelisin Veya Kullanıcı Etiketlemelisin`))
if (cortex1) {
cortex = cortex1;
}
if (cortex2) {
cortex = cortex2;
}
if (!cortex) {
cortex = message.member;
}
let ses = cortex.voice.channel;
if (!ses) {
message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription("**<@"+cortex.id+"> Bir Sesli Kanalda Değil!**"));
}
if (ses) {
message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription(
"**<@"+cortex.id+"> İsimli Kişi `"+ses.name+"` İsimli Kanalda!**"
));
}};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["sorgula"],
    permLevel: 0,
    name: "sorgula"
  }
  
  exports.help = {
    name: "kontrol"
  };
  
  