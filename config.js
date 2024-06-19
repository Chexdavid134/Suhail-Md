const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_07_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcyLFxuICAgICAgICA4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQyLFxuICAgICAgICA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDMsXG4gICAgICAgIDg1LFxuICAgICAgICA2NyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNixcbiAgICAgICAgODYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5LFxuICAgICAgICAzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDUyLFxuICAgICAgICA2NixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQsXG4gICAgICAgIDkwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY2LFxuICAgICAgICA4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgOTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgODksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NixcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4LFxuICAgICAgICA1MixcbiAgICAgICAgMTgxLFxuICAgICAgICA1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImpNcE5iM1hNVE53ZTRST3lGUVVPVlBiaHlTSmkrd2tmdEFlRUFZbUQzRms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJ0S3l4RFFZUWZLUHRZWmdnTmlIaXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2ZkNTZkNjYtZTZiZC00Y2UxLTllOTctNjIxOGQwNmU3NjgyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMTM1LFxuICAgICAgMTc0LFxuICAgICAgMjE0LFxuICAgICAgMjE2LFxuICAgICAgMyxcbiAgICAgIDE0MyxcbiAgICAgIDE4MixcbiAgICAgIDMsXG4gICAgICAxMDgsXG4gICAgICAyMjYsXG4gICAgICAxMDcsXG4gICAgICAxMzcsXG4gICAgICAxMTQsXG4gICAgICA4LFxuICAgICAgMTU4LFxuICAgICAgMTQ2LFxuICAgICAgMTczLFxuICAgICAgNDQsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzAsXG4gICAgICAxNDcsXG4gICAgICAzMSxcbiAgICAgIDE3MSxcbiAgICAgIDM1LFxuICAgICAgMTM5LFxuICAgICAgNjQsXG4gICAgICA5OCxcbiAgICAgIDk1LFxuICAgICAgMTA4LFxuICAgICAgMTk4LFxuICAgICAgMTAyLFxuICAgICAgMzgsXG4gICAgICAyMTYsXG4gICAgICAxMTMsXG4gICAgICA4NSxcbiAgICAgIDIxMixcbiAgICAgIDQsXG4gICAgICAyMDUsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0JNQTNKM1JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjExOTQ5MDA6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3OTIwMTM5NzE2NDU6NjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZVanJJREVPSDB6TE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDMk5wSUZQZ1VLTFc3TFpHVWdaSmpMWERiTzlDMjVMSWlFdk5YREVSUzFvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImIyYWwzYUd2VnZ3dWcrZEZlNGNXSkZzMlJDWjNVd1V3S0dXcElLcCsyUFZXZ0hNTk5rL0ozMUJ6TDl6cUU4QU43bytZbnZ0QjFIblUzL2Vka2NaRkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFsU2ZFVE9YaWNuUHBEZ3FqTzMxT2RaNHM2dDQweEVLaTNIeEVIRW1yRzN4TTlZS0taVVpxWDd1VXJqUDZwbFBQTVY5dXFZVjF5Ym1GTW02amJ4R2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjExOTQ5MDA6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4ODI3NjIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ1NrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDU2suanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpZ1lPREd5S2tidGZmNys4M21KQ0J5MEg2T09yYUlWTjRtcjd4WXFwQllBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkxMDQwNDEwMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Chisom David",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
