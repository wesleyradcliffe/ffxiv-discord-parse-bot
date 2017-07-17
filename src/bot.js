import Discord from 'discord.js';
import Config from './config';

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
// console.log(Config.bot_login_token);
client.login(Config.bot_login_token);