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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_54_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDc4LFxuICAgICAgICA4MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTksXG4gICAgICAgIDU3LFxuICAgICAgICA4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDU1LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDU2LFxuICAgICAgICA0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTksXG4gICAgICAgIDQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxODYsXG4gICAgICAgIDM4LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDMxLFxuICAgICAgICA5MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3LFxuICAgICAgICAzNixcbiAgICAgICAgMjM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvQ2gyMmdUbmNDZWdraWlUTyt3cU5QcFZnL3RoYWV4eEp1Tk9LZ3Y5MjBVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNjExOTQ5MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQyQjEzMzQ1MTRCNDNFMEMzMDEyODZENTI2Rjg1RTZDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjc5NjQ3NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwa0pLQWktWlRqeTJCaVVJb2lTOTFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk1NjE5NDY5LTc0YTktNGUxMS05N2Q5LTg4ZjFlNDVlYWE0YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICA2MyxcbiAgICAgIDQsXG4gICAgICA0MCxcbiAgICAgIDUyLFxuICAgICAgMjQ5LFxuICAgICAgOSxcbiAgICAgIDM2LFxuICAgICAgMjAyLFxuICAgICAgNCxcbiAgICAgIDIxNixcbiAgICAgIDE5NCxcbiAgICAgIDUzLFxuICAgICAgNzAsXG4gICAgICAyNTQsXG4gICAgICAyNDksXG4gICAgICAxOTIsXG4gICAgICAzOSxcbiAgICAgIDEwNixcbiAgICAgIDIyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDUzLFxuICAgICAgNzIsXG4gICAgICA5NyxcbiAgICAgIDEwNixcbiAgICAgIDUsXG4gICAgICA4NSxcbiAgICAgIDE5LFxuICAgICAgODEsXG4gICAgICAzOSxcbiAgICAgIDE3NixcbiAgICAgIDIyNCxcbiAgICAgIDMyLFxuICAgICAgMTg5LFxuICAgICAgMTE5LFxuICAgICAgMTg2LFxuICAgICAgNDMsXG4gICAgICAyMCxcbiAgICAgIDQzLFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRCTTUyVlJWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDYxMTk0OTAwOjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzkyMDEzOTcxNjQ1OjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09YVGpySURFTEQ0MExJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQzJOcElGUGdVS0xXN0xaR1VnWkpqTFhEYk85QzI1TElpRXZOWERFUlMxbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDTUhqQzQycGI5alk1ZEF3R214dXpocjZiaHpHSjc0T015bzA3dlQ2SGFRTjZKR2JZVGZpMmZEc2o5ZmxpS3kvNG1adVBuQ0hHN1Q4SEVyejBpZ1BDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTSVE3ZFZlN3Fsb2FoM1d3MUFDYWtiL0NDWEx6Y21wQisxb1c5cFRIVytrdkp3YmYzc3Q3elN5SHQ0RnVCNjlDWFFtZkRXRG1nWmRicExnMDUvMkJpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDYxMTk0OTAwOjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjc5NjQ2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBSWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFJZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMFFsNGhWdkR2WERObUlIcEU0c1huazBoeFpuQkdXVCtIcDZBeTRMZmJPUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTA0MDQwNjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjc5NjEzNzcxNFwifSIKfQ=="  // PUT your SESSION_ID 


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
