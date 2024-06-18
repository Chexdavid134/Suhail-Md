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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_20_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDksXG4gICAgICAgIDkzLFxuICAgICAgICA4NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDc0LFxuICAgICAgICA2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzLFxuICAgICAgICA2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDc5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNixcbiAgICAgICAgMjIzLFxuICAgICAgICA2NixcbiAgICAgICAgMTkzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM0LFxuICAgICAgICA1NixcbiAgICAgICAgMTE5LFxuICAgICAgICA4MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrUjhBWk5TMmdCQmVjd3JHSTI1Z3ZGNndXN0ZRUGR2U0VqNVl5ZEZaZzVFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxUXZjcDVwZFR1Q3RjS0U3aW9KdTNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjliMGE2OTYzLWUxMzItNGZiMi05ODFjLWUxZWE4YmEwNTRlMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICA3NSxcbiAgICAgIDEyNyxcbiAgICAgIDIyNyxcbiAgICAgIDE1LFxuICAgICAgMjIyLFxuICAgICAgNjgsXG4gICAgICAxNTcsXG4gICAgICAxNDgsXG4gICAgICAyNDYsXG4gICAgICAyMzMsXG4gICAgICAxNDgsXG4gICAgICA4MCxcbiAgICAgIDE4NCxcbiAgICAgIDEyNixcbiAgICAgIDE5NyxcbiAgICAgIDgsXG4gICAgICA1LFxuICAgICAgMTcsXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzUsXG4gICAgICA2OSxcbiAgICAgIDE1MCxcbiAgICAgIDEyMyxcbiAgICAgIDExMixcbiAgICAgIDE2LFxuICAgICAgNTUsXG4gICAgICA5MyxcbiAgICAgIDg0LFxuICAgICAgMzksXG4gICAgICAxMzAsXG4gICAgICAzNSxcbiAgICAgIDIwMyxcbiAgICAgIDExMSxcbiAgICAgIDExNixcbiAgICAgIDE1NSxcbiAgICAgIDE0NSxcbiAgICAgIDEyNyxcbiAgICAgIDE0NixcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBVjZDRTQ3VFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2MTE5NDkwMDo1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc5MjAxMzk3MTY0NTo1NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdlRqcklERUs3cXhMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkMyTnBJRlBnVUtMVzdMWkdVZ1pKakxYRGJPOUMyNUxJaUV2TlhERVJTMW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNVdudUdMTTl1MEtsNTg5OHk0WG9BZ1R0Yk5rZlgrdXFnUk9jRzhza3Z3U1ErSEI2QkpnanVYa2UyWkpnSWtwU3NaVUtKbitYYVNuK2ViMyt5aVl4QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL25Fc0cvZUM3OXlCUnEyd0FMbktVdmdjVVVYT3JNZHRvdVlWQ0pzUTNoRUFYN2tHYnBQMzdLT2p5eFI4azZJSjM5WWo1cmxGb252bHV2Z0RyNDhoamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2MTE5NDkwMDo1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg2OTUyMTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDU09cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNTTy5qc29uIjogIntcImtleURhdGFcIjpcIi93WncxR1VYY3poYmxWcnV0YThSd2g3bEFLOHkzUnVhRHgxRmlaOFkwblU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTEwNDA0MDgzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
