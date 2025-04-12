const fs = require('fs');const moment = require('moment-timezone');
module.exports = {
  config: {
    name: "info",
    aliases: ["inf", "in4"],
    version: "2.0",
    author: "VEX_ADNAN",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    longDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    category: "Information",
    guide: {
      en: "{pn}"
    },
    envConfig: {}
  },

  onStart: async function ({ message }) {
    this.sendInfo(message);
  },

  onChat: async function ({ event, message }) {
    if (event.body && event.body.toLowerCase() === "info") {
      this.sendInfo(message);
    }
  },

  sendInfo: async function (message) {
    const botName = " ᯽ᵞᴼᵁᴿ 🌷𝐁𝐁'𝐗᯽ ";
    const botPrefix = "/";
    const authorName = "𝐓 𝐀 𝐍 𝐉 𝐈 𝐋";
    const authorFB = "https://www.facebook.com/share/15P7QEFwsR/";
    const authorInsta = "𝐓𝐨𝐫𝐞 𝐝𝐢𝐛𝐨 𝐤𝐧 ";
    const status = "𝐒 𝐈 𝐍 𝐆 𝐋 𝐄";

    const urls = JSON.parse(fs.readFileSync('scripts/cmds/assets/Ayan.json'));
    const link = urls[Math.floor(Math.random() * urls.length)];

    const now = moment().tz('Asia/Dhaka');
    const date = now.format('MMMM Do YYYY');
    const time = now.format('h:mm:ss A');

    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${hours}h ${minutes}m ${seconds}sec`;

    message.reply({
      body: `╭────────────◊
├‣ 𝐁𝐨𝐭 & 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 
├‣ 𝐍𝐚𝐦𝐞: ${authorName}
├‣ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞:  ${botName}
├‣ 𝐏𝐫𝐞𝐟𝐢𝐱:  ${botPrefix}
├‣ 𝐅𝐛: ${authorFB}
├‣ 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦:  ${authorInsta}
├‣ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩: ${status}   
├‣ 𝐓𝐢𝐦𝐞:  ${time}
├‣ 𝐔𝐩𝐭𝐢𝐦𝐞: ${uptimeString}
╰────────────◊`,
      attachment: await global.utils.getStreamFromURL(Link)
    });
  }
}; 
