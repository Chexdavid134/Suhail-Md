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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_18_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIzLFxuICAgICAgICA4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgODQsXG4gICAgICAgIDExOSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3LFxuICAgICAgICA4OSxcbiAgICAgICAgMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDg1LFxuICAgICAgICA0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4LFxuICAgICAgICA1OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDg2LFxuICAgICAgICA3MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDc0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDgwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDksXG4gICAgICAgIDM1LFxuICAgICAgICAxMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDcwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM1kyU3ZzNnFwN0tIbzZYTEtNbTYxa2JVNmVtaHpveGRuQlByN29kRUthRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDYxMTk0OTAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5NEU5OTM1NDc1OUEwQjI3REY5OEM0MTgzOEE0MzM5NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc5MjQ2NzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN3hJU192UWRRZWk2d2VvejN6LTBCQVwiLFxuICBcInBob25lSWRcIjogXCJlNjQ1NThlZC0yY2I2LTQ4ODEtOTBjYi1lZmI4MGUzNzJkYTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQwLFxuICAgICAgMTA1LFxuICAgICAgMTc3LFxuICAgICAgMTE1LFxuICAgICAgMzgsXG4gICAgICAxODksXG4gICAgICA1MixcbiAgICAgIDExMyxcbiAgICAgIDYxLFxuICAgICAgMjYsXG4gICAgICAxNTksXG4gICAgICAxOTcsXG4gICAgICAxMjAsXG4gICAgICAzOSxcbiAgICAgIDE3MixcbiAgICAgIDY3LFxuICAgICAgNCxcbiAgICAgIDExNSxcbiAgICAgIDIxMixcbiAgICAgIDIxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5LFxuICAgICAgMjE4LFxuICAgICAgNDksXG4gICAgICAxMTAsXG4gICAgICA3OSxcbiAgICAgIDE5NSxcbiAgICAgIDE1MCxcbiAgICAgIDUyLFxuICAgICAgMTUsXG4gICAgICA2NCxcbiAgICAgIDczLFxuICAgICAgMTQsXG4gICAgICA2MCxcbiAgICAgIDExMyxcbiAgICAgIDE5MyxcbiAgICAgIDEwNSxcbiAgICAgIDE4OCxcbiAgICAgIDExMCxcbiAgICAgIDk1LFxuICAgICAgMjQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhYR0pUUDZKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDYxMTk0OTAwOjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzkyMDEzOTcxNjQ1OjQ2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BUVGpySURFTDNtbGJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQzJOcElGUGdVS0xXN0xaR1VnWkpqTFhEYk85QzI1TElpRXZOWERFUlMxbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBbkxHMmhyL3hmMzd2QTQ1K1laVjQ1T3NIUUdodEhZZ3FkaWlkamxvREFXaDdxZlhSMXJiaHd5NTIzUUxKdzNhdEdCMUM0MFBoM2NTWFVXN3J5ZU1Edz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNMFBPTFhwYlJpUXMyczdrTHBMeDA1MnpFMjdubGRVZmg0SXU2OTFuZmx4cklxbEZiMTRTSThFYXpTQklFN2xhRDlFUGNGcFY4Mk5XcFRyTVhrSlBDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDYxMTk0OTAwOjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzkyNDY3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNTT1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1NPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL3dadzFHVVhjemhibFZydXRhOFJ3aDdsQUs4eTNSdWFEeDFGaVo4WTBuVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTA0MDQwODMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
