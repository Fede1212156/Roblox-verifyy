const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "Help | <Command Name>",
  run: async(client, message, args) => {
    
    message.delete();
    
    let embed = new MessageEmbed()
    .setColor(Color)
    .setTitle(`${client.user.username} Commands!`)
    .setDescription(`Use ${Prefix}Help <Command Name> For More Command Information!` + 
    "\n\n**Verification**\n`Verify, Coming Soon`" + "\n\n" + "**Moderation**\n`Clear, Mute, Unmute, Tempmute, Kick, Ban, Unban, Tempban, Warn, Warnings, ResetWarns`" + "\n\n"+
    "**Information**\n`Help, Covid, Weather, Userinfo, Serverinfo, Ping, play, skip, queue, remove, resume, shuffle, skipto, stopmusictrivia, playlist, skipall, stop, volume, loop, leave, lyrics, musictrivia, pause, `" + "\n\n"+
    "**Music**\n`Play, play[tit le/url], search > search [title], skip, stop, pause , resume, nowplaying, queue, volume`")
    
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp().setFooter(`Power by MYBOT`) 
    
    if (!args.length) return message.channel.send(embed);

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor('#6fc4c1')
      .setTitle(`${cmd.name} Information!`)
      .addField(`Aliases`, cmd.aliases || "None!")
      .addField(`Usage`, cmd.usage || "No Usage")
      .addField(`Description`, cmd.description || "No Description!")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};
