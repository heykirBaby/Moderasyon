const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async(client, message, args) => {
    
  if(!["825831723841355798"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
    
const bans = new Map();
            message.guild.fetchBans().then(g => {
                bans[g.id] = g;
                let banlist = (`${bans[g.id].map(ge => `\n (${ge.user.tag}) (${ge.user.id})`).join('\n')}`)
                        try {     
                let noembed = new Discord.MessageEmbed()
  .setColor('#0070FF')
                .setDescription(`Bu Sunucuda Yasaklı Kullanıcı Bulunmuyor.`)
                .setAuthor(message.guild.name, message.guild.iconURL() ? message.guild.iconURL() : "https://images-ext-2.discord.net/external/hHow2gpD0uyL8WnA8ynAHuPbzm_lE1lNAaxkLqDT0Fs/https/images-ext-1.discord.net/external/rBk_abKMsqAKoATjXbtyqKJt2bTXI_shMEemVpbNtFw/http/www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png")
               .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
                if(banlist.length === 0) return message.channel.send(noembed)
                const embed = new Discord.MessageEmbed()
                    .setDescription(banlist)
                    .setAuthor(message.guild.name, message.guild.iconURL() ? message.guild.iconURL() : "https://images-ext-2.discord.net/external/hHow2gpD0uyL8WnA8ynAHuPbzm_lE1lNAaxkLqDT0Fs/https/images-ext-1.discord.net/external/rBk_abKMsqAKoATjXbtyqKJt2bTXI_shMEemVpbNtFw/http/www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png")
   .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
                .setColor('#0070FF')
                message.channel.send(embed)
                      } catch (err) {
        const embed = new Discord.MessageEmbed()
            .addField(`Sunucuda Bulunan Yasaklılar`, '<:no:663378512417128449> Üzgünüm ama sunucunuzda fazla sayıda yasaklı kullanıcı bulunuyor Bu Yüzden gösteremiyorum. Discord buna izin vermiyor.')
            .setColor('RED')
          .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
            .setTimestamp()
        message.channel.send(embed)
                      }

        });
    }
                                           
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yasak-listesi'],
  permLevel: 0
};

exports.help = {
  name: 'banlist',
  description: 'Sunucudaki Yasaklı Kullanıcıları Gösterir.',
  usage: 'banlist',
 
};