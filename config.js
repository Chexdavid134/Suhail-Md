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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "09061194900";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_57_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc3LFxuICAgICAgICA2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTczLFxuICAgICAgICA3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI2LFxuICAgICAgICA4NixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDMxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUwLFxuICAgICAgICA0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM1LFxuICAgICAgICA1NixcbiAgICAgICAgMTI5LFxuICAgICAgICA4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU2LFxuICAgICAgICA3NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgMTkzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDc4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyLFxuICAgICAgICA1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NixcbiAgICAgICAgODQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRXdZazZsaXc4eDFLMStoNGE4MFgvT0RJc0NjczI5UmV0QmVsSlZyd3pYUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNVh2RVEyM1pRLXlTNFVIYW9ZSVlRd1wiLFxuICBcInBob25lSWRcIjogXCIxOTQzMTA0Zi02ZTllLTRmMTEtOTc0NC03OThhNDlhNTZjZDFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAyMTMsXG4gICAgICA5MCxcbiAgICAgIDgwLFxuICAgICAgMjgsXG4gICAgICAxMixcbiAgICAgIDI0OCxcbiAgICAgIDE3NyxcbiAgICAgIDE5OSxcbiAgICAgIDE0NyxcbiAgICAgIDE3NCxcbiAgICAgIDM5LFxuICAgICAgMTEsXG4gICAgICA5MyxcbiAgICAgIDExNixcbiAgICAgIDQ1LFxuICAgICAgMTMsXG4gICAgICAxMTgsXG4gICAgICAxMTYsXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODksXG4gICAgICAxMzEsXG4gICAgICAxMixcbiAgICAgIDE4LFxuICAgICAgMTMwLFxuICAgICAgMjMyLFxuICAgICAgNjQsXG4gICAgICAyNDYsXG4gICAgICAyMzUsXG4gICAgICAxMDIsXG4gICAgICAxNzcsXG4gICAgICAxNTYsXG4gICAgICAyNyxcbiAgICAgIDE5MSxcbiAgICAgIDEzMixcbiAgICAgIDEzNixcbiAgICAgIDEwMixcbiAgICAgIDEzNSxcbiAgICAgIDM0LFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNYUFlWVkE1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDYxMTk0OTAwOjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzkyMDEzOTcxNjQ1OjMzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09mVGpySURFTHVpMHJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQzJOcElGUGdVS0xXN0xaR1VnWkpqTFhEYk85QzI1TElpRXZOWERFUlMxbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDNmRvaW9sYk5ITlkrY2cvMkdROUFMRnBsV1dvUXkvVkF2ajVkN0RLeXR2SUM5VjlDT0dicUxuNGxIZml3blRhdTRnTVR0eko1SkwzVURraHBzVWJEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEb3ZsSnJmWTdOaGE2bzRJejdIZU4rS1ZLbFZCMlpvUisvMkVhRnoreTZQcFRDVk1TdGFBcWZYVnpLTGx4NjAybzkvM0o2Sk1PUUh0anJqWXJsZFZqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDYxMTk0OTAwOjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjgxODIzOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBSWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFJZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMFFsNGhWdkR2WERObUlIcEU0c1huazBoeFpuQkdXVCtIcDZBeTRMZmJPUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTA0MDQwNjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjc5NjEzNzcxNFwifSIKfQ=="  // PUT your SESSION_ID 


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
