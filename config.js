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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348162702502";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348162702502";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_48_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjksXG4gICAgICAgIDk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICA1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDczLFxuICAgICAgICA4NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA2LFxuICAgICAgICA5MyxcbiAgICAgICAgNCxcbiAgICAgICAgODMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTksXG4gICAgICAgIDQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMSxcbiAgICAgICAgMzksXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAxLFxuICAgICAgICA3MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NixcbiAgICAgICAgMTcwLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDksXG4gICAgICAgIDY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDg0LFxuICAgICAgICA3NixcbiAgICAgICAgMTcyLFxuICAgICAgICA4OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIsXG4gICAgICAgIDYsXG4gICAgICAgIDYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiKzR1Mm1DZkRjc29waW9jM2NUaHNVazI3UEFhaVhwN3dZR0xwSVN4Mmc3Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRS1ZYk1mWG1RUXlWSjFENERsMm9UQVwiLFxuICBcInBob25lSWRcIjogXCI0ZDFiNzFmOC1mMDQwLTRiOGQtOThmNC00YmFkOThmNmUwMWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE4LFxuICAgICAgMTY5LFxuICAgICAgMjI4LFxuICAgICAgODUsXG4gICAgICA0NSxcbiAgICAgIDEwNyxcbiAgICAgIDI1MixcbiAgICAgIDczLFxuICAgICAgMzUsXG4gICAgICAxMixcbiAgICAgIDE2OSxcbiAgICAgIDg2LFxuICAgICAgMTY0LFxuICAgICAgMTg5LFxuICAgICAgNTMsXG4gICAgICAyMyxcbiAgICAgIDE1MSxcbiAgICAgIDIzOSxcbiAgICAgIDEzMyxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODksXG4gICAgICAyNCxcbiAgICAgIDE5OSxcbiAgICAgIDIwMyxcbiAgICAgIDE0LFxuICAgICAgMTI5LFxuICAgICAgOTIsXG4gICAgICA4NSxcbiAgICAgIDExOCxcbiAgICAgIDI1LFxuICAgICAgNDEsXG4gICAgICAxMjQsXG4gICAgICAzMSxcbiAgICAgIDIwNSxcbiAgICAgIDE4NSxcbiAgICAgIDIyLFxuICAgICAgMTc5LFxuICAgICAgMTY5LFxuICAgICAgMTYxLFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJM1Nzd1lRdWM2UHd3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNIYXJTdHBUSHRkNVZUY2Z2anJPNEtsM1lEMXFVQVUwUmhoTUxpWVNBR0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidVRzbHlSNGxQK29YVFFxWFphbXc4bDJrSTBNa3o0d2czQ0xmSkU2QzJIbmx1aFFOR0lHcW43S2FvNUFpVDZMSkxhbUNqY2JlYy9sSEpLYXpESDYvQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMVBPaExUdnllSk9vc0xUL0loQWJrSE4zNWtpMlhvZERWeVEzaE5WL2g3R05ITDlSRnJKSWpmb1Q0QTNnWkRrZkp1SXZUNVRqNlFPVENnS2Y1MTFjZ2c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYyNzAyNTAyOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzgzMzU3ODMxMDA0NjQ6MjBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTYyNzAyNTAyOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUxMzc3NzI0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTm50XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFObnQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4dHNZeFkycGY4eUw1T3Mzb2RiSkV2bVpWQnBEeXY3MUhsQVVyV2xSSUdVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNDI5MDA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTEzNzc3MjY0MTBcIn0iCn0="  // PUT your SESSION_ID 


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
