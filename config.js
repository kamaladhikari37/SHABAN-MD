const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ090UmJnWHRZZHpaRGJ5YkpVNmxnY1ZJNUxzYW85L09VaEgyTTVOaE9Hdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGlQK0FCUDBLb0pGVlBuRzc3dmNhU3laakVia0JCUXM4alpwV2V6aHoxUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRR1RJTHkvWFY3WDRoL0VjTTJUUUpXWVZHVFdzSFV2WGJFT09EMGlNMm1nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIOGhqOFh4VjVSaE1WQ2lVR0dZU2YwZmV0aThrV21LbHM1WVRNNzZnYkcwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9PM1hQSEorT3V2Mmp6YmV2MkVMTjlUWmROTTV6eWxQdTRaUlZuWi9YMFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI0OVpEaGdnYzZGQnIyWWk1T0ExVEt1QkR1UURjRlhVem93OVpGUUlHUlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0pQVk0yZEVoT0hsZkFQN3pQNiszTzRCK0xKVmYvV3R3TlZVQlA4S0pYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWFOeVUxZ3VUd2crZ0NXWkUwY2poSTQvakdWQTk4bHZtaXA4UnMxaVRUWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJQUXpYWUp5azliOXpXbnZ4YlRNd2JaeERyYTRmdDV2Z2UrZ3hQWUtBQXBpbmlpS1AwSHBYNHBCKzdTRnBFTVdXb29ja0ZZU2x3NjFNVWs1ckU3eWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA0LCJhZHZTZWNyZXRLZXkiOiJSc1pqcEltS3BpY2N3QXpXYTM2YUxJVktZNHBVejVGb1VoR1BxcFlQdDRrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJGUFEzTkJRTCIsIm1lIjp7ImlkIjoiOTE3NTg1OTczNzY4Ojc0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuGXqlxuXG5cblxu5Y2CXG5cblxuXG7lsLpcblxuXG5cbtKcXG5cblxuLVxuXG4gXG7ljYRcblxuXG5cbuWNglxuXG5cbuWMmlxuXG5cblxu0pxcblxuXG5cbuS5h1xuXG5cblxu5bC6IiwibGlkIjoiNTYzNDIwMDE3ODI4MTQ6NzRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNcWcyMG9RL29mZXhnWVlCQ0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvbFA2RnRIKy9NOGROSmZUQlNzQ2JhWjJsQ2Q1Sy8zMDVYUHNLTDFkT0hZPSIsImFjY291bnRTaWduYXR1cmUiOiJyVVJXbjNKU1IxZ3U2V3VpMnBIWDJhUlprbG1ienNZU3lzU0h1Y0ZIOHRGaU80RkhudWU5UGJPM290R0tBSkdnWnlGV1dUZzdhdFc2c0hiMFpQUUdEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMTNTWjhJVXlrY0VqQS9INzA1YzhqNmh6THJ4SmYreENnQm1DeHp3ZHo0cE5kUmhkaEN6SjBQdHZCRktPRnpwamQxeXBROXdKNFdMZ3FnWXZ4VHkyaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTc1ODU5NzM3Njg6NzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYUpUK2hiUi92elBIVFNYMHdVckFtMm1kcFFuZVN2OTlPVno3Q2k5WFRoMiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4OTU0NDk3LCJsYXN0UHJvcEhhc2giOiI0WlJQNlMiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxxZSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Mʀ-Sʜᴀʙᴀɴ",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923059395959",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-SHABAN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923059395959",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
