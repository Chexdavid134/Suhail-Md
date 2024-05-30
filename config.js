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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_45_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDM1LFxuICAgICAgICAyNyxcbiAgICAgICAgOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyLFxuICAgICAgICA2MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjksXG4gICAgICAgIDc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDg0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA3NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUwLFxuICAgICAgICA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MixcbiAgICAgICAgMjI0LFxuICAgICAgICA4NixcbiAgICAgICAgMTYzLFxuICAgICAgICA0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAwLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MixcbiAgICAgICAgMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgODAsXG4gICAgICAgIDUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImlxYldxTW1LSEFDVkROUE95RGhMcXZoWVdGb09xK3pHN3RXRGpRZXExTmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlN3R1ZreDVaUm1DZ1R5OFE5VTRDbUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGViMjAwYzUtNzE4ZC00YmI1LWE5ZjQtNDllNTQ0NjFmZGJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDI5LFxuICAgICAgMTc0LFxuICAgICAgMjA5LFxuICAgICAgOTcsXG4gICAgICAyMzMsXG4gICAgICA0MixcbiAgICAgIDQwLFxuICAgICAgMjQyLFxuICAgICAgMTk5LFxuICAgICAgMTY2LFxuICAgICAgNDMsXG4gICAgICA4MyxcbiAgICAgIDE0LFxuICAgICAgOTQsXG4gICAgICAxMjUsXG4gICAgICAyMjgsXG4gICAgICAyMTcsXG4gICAgICA1NSxcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICAyMzMsXG4gICAgICAxNzksXG4gICAgICA0MSxcbiAgICAgIDc5LFxuICAgICAgMTUyLFxuICAgICAgMjUsXG4gICAgICA2NCxcbiAgICAgIDUzLFxuICAgICAgMjQ0LFxuICAgICAgMTgzLFxuICAgICAgMjQ2LFxuICAgICAgMjQ0LFxuICAgICAgMTIxLFxuICAgICAgMjQ2LFxuICAgICAgODksXG4gICAgICAxNzcsXG4gICAgICAyNTEsXG4gICAgICAyMDMsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVpKOVJTMjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjExOTQ5MDA6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3OTIwMTM5NzE2NDU6MzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3JUanJJREVPekE0TElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDMk5wSUZQZ1VLTFc3TFpHVWdaSmpMWERiTzlDMjVMSWlFdk5YREVSUzFvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJhNnliUWsxMk1JNVY1ZkVFejVnU1lBbC9ONS9vV1dtYy91SEN4ckJ1aE1hNm9zWkVDY2VNTnRRSVNOSk9mbDEzQmE4eGxQc29IY2x2Wk9sQXJtekRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInQ4UWxBanNCZjc5UXo1dDZjWTVOWXFzUlhUWm5XMWRUK1Z6VjFZTFEwbGxKYkpzRVhIdXpYazRJNm5wbWk5cE9XR1hOVDVkb3AxT2dkWmduNVB5VkFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjExOTQ5MDA6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MDUxNTA0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
