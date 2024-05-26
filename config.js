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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') :"09061194900";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_20_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk3LFxuICAgICAgICA0LFxuICAgICAgICA0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzLFxuICAgICAgICA5NixcbiAgICAgICAgMjU0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTczLFxuICAgICAgICA0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI3LFxuICAgICAgICA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDczLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA4LFxuICAgICAgICA3NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU4LFxuICAgICAgICA5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDg3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDczLFxuICAgICAgICAyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDM1LFxuICAgICAgICA4NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuZENVaXQ3VnZEaE55amJ4QURUTHo5ckxIc2dOVUpLTy9GTDdLTUV5V0dnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJY2Vuc2htcVFLS2c4QzREZHVxbmR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjRmYTY0Mzg1LTY3MmQtNDhlMS04MmE3LWE5Yjk1YzNjNzZkOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDEwOSxcbiAgICAgIDE4NCxcbiAgICAgIDE0MyxcbiAgICAgIDEwOCxcbiAgICAgIDE1NixcbiAgICAgIDIyMyxcbiAgICAgIDk2LFxuICAgICAgOTIsXG4gICAgICAyMDcsXG4gICAgICAzMCxcbiAgICAgIDc3LFxuICAgICAgMTAzLFxuICAgICAgMjExLFxuICAgICAgMTA4LFxuICAgICAgMTYsXG4gICAgICAyMzQsXG4gICAgICAxNjcsXG4gICAgICAxNDQsXG4gICAgICAxMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICAyMDgsXG4gICAgICAxMDIsXG4gICAgICAxMDYsXG4gICAgICA5MyxcbiAgICAgIDEzNCxcbiAgICAgIDE3NixcbiAgICAgIDEzNyxcbiAgICAgIDIxNCxcbiAgICAgIDIxMCxcbiAgICAgIDE5NixcbiAgICAgIDQ4LFxuICAgICAgOTgsXG4gICAgICAzNCxcbiAgICAgIDY2LFxuICAgICAgMTg4LFxuICAgICAgMTk5LFxuICAgICAgMTQxLFxuICAgICAgMTIwLFxuICAgICAgNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMjc0RFBRN0xcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjExOTQ5MDA6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3OTIwMTM5NzE2NDU6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1BUanJJREVOYmV6YklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDMk5wSUZQZ1VLTFc3TFpHVWdaSmpMWERiTzlDMjVMSWlFdk5YREVSUzFvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdSelhCdlFxTHBET1FlSmZ3bWoxQW5FeG41VzZ2bGI3aHQ0YUI2REF4Nlo4YjZJVThnY05TSWY4OCtQa2dpWmpROXQvKzFLTDJGanlWZmRWc2R0RERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVMbU95NW5PVm00dk5UUWowOUxvRGI5ZHdoclBleXhuM25pbnlwb3FVMWR1MTZKK0FnTVZMVG9sbGNDVDhmeVVVeHIwc0g0MEV3TzNsUDBNVlg3aml3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjExOTQ5MDA6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NzQ0MDI1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
