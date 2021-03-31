const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["826486428023128144"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "703353938056970322"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `\<a:alfea_0:826746306017493002>`,
'1': `\<a:alfea_1:826469971911639050>`,
'2': `\<a:alfea_2:826469971852656701>`,
'3': `\<a:alfea_3:826469976017600554>`,
'4': `\<a:alfea_4:826469974628761642>`,                       
'5': `\<a:alfea_5:826469976512135180>`,
'6': `\<a:alfea_6:826469879816126535>`,
'7': `\<a:alfea_7:826469976495095818>`,
'8': `\<a:alfea_7:826469976495095818>`,
'9': `\<a:alfea_9:826469976138711062>`}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `\<a:alfea_0:826746306017493002>`,
'1': `\<a:alfea_1:826469971911639050>`,
'2': `\<a:alfea_2:826469971852656701>`,
'3': `\<a:alfea_3:826469976017600554>`,
'4': `\<a:alfea_4:826469974628761642>`,                       
'5': `\<a:alfea_5:826469976512135180>`,
'6': `\<a:alfea_6:826469879816126535>`,
'7': `\<a:alfea_7:826469976495095818>`,
'8': `\<a:alfea_7:826469976495095818>`,
'9': `\<a:alfea_9:826469976138711062>`}[d];})}

var taglılar = 0;
let tag = "◭";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `\<a:alfea_0:826746306017493002>`,
'1': `\<a:alfea_1:826469971911639050>`,
'2': `\<a:alfea_2:826469971852656701>`,
'3': `\<a:alfea_3:826469976017600554>`,
'4': `\<a:alfea_4:826469974628761642>`,                       
'5': `\<a:alfea_5:826469976512135180>`,
'6': `\<a:alfea_6:826469879816126535>`,
'7': `\<a:alfea_7:826469976495095818>`,
'8': `\<a:alfea_7:826469976495095818>`,
'9': `\<a:alfea_9:826469976138711062>`}[d];})}

  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `\<a:alfea_0:826746306017493002>`,
'1': `\<a:alfea_1:826469971911639050>`,
'2': `\<a:alfea_2:826469971852656701>`,
'3': `\<a:alfea_3:826469976017600554>`,
'4': `\<a:alfea_4:826469974628761642>`,                       
'5': `\<a:alfea_5:826469976512135180>`,
'6': `\<a:alfea_6:826469879816126535>`,
'7': `\<a:alfea_7:826469976495095818>`,
'8': `\<a:alfea_7:826469976495095818>`,
'9': `\<a:alfea_9:826469976138711062>`}[d];})}

  
  
  
var booster = message.guild.roles.cache.get("BOOSTER ROL ID").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
'0': `\<a:alfea_0:826746306017493002>`,
'1': `\<a:alfea_1:826469971911639050>`,
'2': `\<a:alfea_2:826469971852656701>`,
'3': `\<a:alfea_3:826469976017600554>`,
'4': `\<a:alfea_4:826469974628761642>`,                       
'5': `\<a:alfea_5:826469976512135180>`,
'6': `\<a:alfea_6:826469879816126535>`,
'7': `\<a:alfea_7:826469976495095818>`,
'8': `\<a:alfea_7:826469976495095818>`,
'9': `\<a:alfea_9:826469976138711062>`}[d];})}


  
const embed1 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
 \<a:alfea_kristalyldz:826469971609387030> **Sunucuda Toplam** ${üyesayısı} **Üye bulunmakta.** 
 \<a:alfea_kristalyldz:826469971609387030> **Sunucuda Toplam** ${cevirimici} **Üye Çevrimiçi.** 
 \<a:alfea_kristalyldz:826469971609387030> **Ses Kanallarında** ${sessayı} **Üye Sohbet Ediyor.**
 \<a:alfea_kristalyldz:826469971609387030> **Tagımızda Toplam ** ${taglılar} **Üye Bulunmakta.**
 \<a:alfea_kristalyldz:826469971609387030> **Sunucuda Toplam ${booster} Booster Üye Bulunmakta.**`)
.setFooter('Cortex 🖤 Alfea');
msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}