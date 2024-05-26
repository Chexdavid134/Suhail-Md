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
global.owner= process.env.ownernumber  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "09061194900";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_25_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3LFxuICAgICAgICA4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTksXG4gICAgICAgIDUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMzLFxuICAgICAgICA5LFxuICAgICAgICA3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk5LFxuICAgICAgICA1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI3LFxuICAgICAgICA4NixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTksXG4gICAgICAgIDI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE5LFxuICAgICAgICA0MixcbiAgICAgICAgMTE0LFxuICAgICAgICA4MixcbiAgICAgICAgOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2LFxuICAgICAgICA4MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MCxcbiAgICAgICAgODEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk0LFxuICAgICAgICA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICA1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NixcbiAgICAgICAgNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzksXG4gICAgICAgIDM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieXlsREM2QUtXdUwwUytBeG9VZEpHR0szNkVjT1VwUktyMWRWaW1tT2dKMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTHgyOWl3WXdRVnF6XzZPRTdtQllUd1wiLFxuICBcInBob25lSWRcIjogXCI2Mjc0ODg1NS02ZjgwLTQ5ZTctOTc3ZS0yNzhlZDk3MTJlM2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMTg3LFxuICAgICAgMTEzLFxuICAgICAgMjE0LFxuICAgICAgMTUxLFxuICAgICAgNTgsXG4gICAgICAyNDMsXG4gICAgICAyMjksXG4gICAgICAyMzEsXG4gICAgICAxNTYsXG4gICAgICAxODMsXG4gICAgICAxMzgsXG4gICAgICAyMjQsXG4gICAgICAzLFxuICAgICAgMTAzLFxuICAgICAgNzYsXG4gICAgICA5MCxcbiAgICAgIDksXG4gICAgICAyMzUsXG4gICAgICAyNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMzLFxuICAgICAgNzAsXG4gICAgICAyMzcsXG4gICAgICAyMDMsXG4gICAgICAxNDEsXG4gICAgICA3NSxcbiAgICAgIDIxLFxuICAgICAgMTExLFxuICAgICAgMTEsXG4gICAgICA3MyxcbiAgICAgIDQyLFxuICAgICAgODcsXG4gICAgICA0MyxcbiAgICAgIDI1MixcbiAgICAgIDc4LFxuICAgICAgMTk3LFxuICAgICAgNzMsXG4gICAgICAxMDQsXG4gICAgICAxMjQsXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXNFo1NERWTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2MTE5NDkwMDoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc5MjAxMzk3MTY0NToyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPTFRqcklERU1QenlySUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkMyTnBJRlBnVUtMVzdMWkdVZ1pKakxYRGJPOUMyNUxJaUV2TlhERVJTMW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUThVc2RXRFJudHlwQmhEV3o5OXlyUmdCdGFhbVVPMmxEbWFHdVBEL0tnbGdNWFE4RDl1QWxWd3EvUEhXaEk3dTBJZVJkR1VUT1ptc1ZGWEpVbmNUQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWjFTTXpVdXcxZlpTMFZxUHdBMzFNL0lqSVVOMVF3eWVuN1ZNYlZFdkZoVjZ1eHRCeHk1U09hSngrQmV1aGhEZGxaOGJ0aGw1Um51SnAzTFJ0aXhMRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2MTE5NDkwMDoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY2OTc1NDNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9 "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
