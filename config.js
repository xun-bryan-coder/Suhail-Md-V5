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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348103283453";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348103283453";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_55_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTExLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODksXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTksXG4gICAgICAgIDY3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MixcbiAgICAgICAgMjEwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODcsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDksXG4gICAgICAgIDgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDMwLFxuICAgICAgICA5NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI5LFxuICAgICAgICA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5LFxuICAgICAgICA3NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIsXG4gICAgICAgIDg2LFxuICAgICAgICA5NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyLFxuICAgICAgICA0NixcbiAgICAgICAgMTk1LFxuICAgICAgICA0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAxLFxuICAgICAgICA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMyLFxuICAgICAgICA2NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2OSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN2E1a1BJVkxBQ2k3aGNCeGtncGkzcjJrS3N4d05aZVN4TXpkR3E1SkFRND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM09IdEN1VWlUVEM3b1ZicVBwVlp6UVwiLFxuICBcInBob25lSWRcIjogXCI0N2I1Y2VlYy1mNGMzLTQ3NWEtYTY2Zi05MWY1NzBjZDEyZmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICAyMTEsXG4gICAgICAxNDgsXG4gICAgICAyMjUsXG4gICAgICAxOTQsXG4gICAgICA5MixcbiAgICAgIDEwNSxcbiAgICAgIDQ5LFxuICAgICAgMTk5LFxuICAgICAgOTEsXG4gICAgICAxMTgsXG4gICAgICAyMzUsXG4gICAgICAyMjYsXG4gICAgICA1NyxcbiAgICAgIDI1LFxuICAgICAgMTAsXG4gICAgICAyMjUsXG4gICAgICAxMjEsXG4gICAgICA1NSxcbiAgICAgIDk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAxMTEsXG4gICAgICAxMDUsXG4gICAgICAyMzQsXG4gICAgICAxMDYsXG4gICAgICAxNixcbiAgICAgIDM1LFxuICAgICAgMTU4LFxuICAgICAgMTUxLFxuICAgICAgMTUwLFxuICAgICAgMjEyLFxuICAgICAgMTA0LFxuICAgICAgMjIwLFxuICAgICAgNTksXG4gICAgICA2MixcbiAgICAgIDEzMSxcbiAgICAgIDEzOSxcbiAgICAgIDg5LFxuICAgICAgNTMsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLUGxrZThCRU1iL3Y4RUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkR3WkdBWTR6UHpsUklwaDhveUo4QitMM3Rpc0ZjV2E5V3YyVVJka2N2VUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNDFGV0U2dGhlZ05pRUNNcStITHZQYTVMdjMvbmpsbStjYXkreWV4ZVZJWERmQWVKTytUVEJUN0UrNklHaFdJVU1ZazZWa2tsZVVoV2NoY1Fxek42REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaXNqVGh1aCtRME95aHZZK1UyNEM5cXdxOFd0RkVmNW1XT2l0NjdDL0w5UDJFZUNYYmNBN0s0V01VaGY2TmoweUlWdkVobGhVb200S3pyTUVYVHBVQ1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAzMjgzNDUzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiT255ZWRpa2FjaGlcIixcbiAgICBcImxpZFwiOiBcIjE5MjExODE4MjExNzU2MDoxMkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDMyODM0NTM6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDc5NzYxMzhcbn0iCn0=s"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
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
