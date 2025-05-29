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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348165820748";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348165820748";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_06_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0LFxuICAgICAgICA3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgODMsXG4gICAgICAgIDk5LFxuICAgICAgICAzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDgwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNixcbiAgICAgICAgODksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1LFxuICAgICAgICA3LFxuICAgICAgICA3MSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIsXG4gICAgICAgIDY4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMixcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgxLFxuICAgICAgICAyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMyxcbiAgICAgICAgMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDk5LFxuICAgICAgICA4MixcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDcyLFxuICAgICAgICAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxzU1NEWXlPSVAzWkhpY1NZYnBJM3pqN3hIMXpZR1VoQnNjZlc0czdUQXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2NTgyMDc0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUVFOEZCRjdENENFMzRCNzVGMjkxQ0MwQTM2MDQ0MkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ4NTQ5MjAzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpqZklIc2ZpVEp1QThfei1CV3pmSGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzI5YTQ1NWUtMDdkMy00MzBkLTgxMzYtZDAxZTQ2YzU5MDcxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDI2LFxuICAgICAgMTQyLFxuICAgICAgMTAxLFxuICAgICAgNDUsXG4gICAgICAxOTYsXG4gICAgICAxMjAsXG4gICAgICAxMDgsXG4gICAgICAyNSxcbiAgICAgIDE1MSxcbiAgICAgIDE2OSxcbiAgICAgIDEwMyxcbiAgICAgIDE5MixcbiAgICAgIDIyOSxcbiAgICAgIDQ5LFxuICAgICAgOCxcbiAgICAgIDc3LFxuICAgICAgMTIzLFxuICAgICAgMTYsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTExLFxuICAgICAgNTIsXG4gICAgICAxOTMsXG4gICAgICAyMjMsXG4gICAgICAxODAsXG4gICAgICAyMzcsXG4gICAgICAyNTMsXG4gICAgICAyMjIsXG4gICAgICAxODUsXG4gICAgICAxNzUsXG4gICAgICA0MCxcbiAgICAgIDcyLFxuICAgICAgMTY0LFxuICAgICAgMTA3LFxuICAgICAgMjU0LFxuICAgICAgMTU2LFxuICAgICAgOTcsXG4gICAgICA3OSxcbiAgICAgIDEwOCxcbiAgICAgIDExNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05EU3k0WURFTWo4NHNFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQU12Q0gwY0JZOWlPNGtmNUJFU2E4cVJQZk40NXh3WDJjNlhiUzdjOTVYbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4dGJQTW9HUVZNMC91aWVyak4ralBkVXo0VmxDdjlwTG82V0lydERZYTZ3YWJFL2ZNQ2dDTWtaN1VPOERJcFZ4bHpIM1pld0JMd09OUzI4NnZFZDZBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXTzdZRTF5YVJkMnFOaVBnaXdwekJCa3lWS2lSTXRwZWpUdm9mWVRqZks0a0xHOE1nZGlvekVGa0dvdXhmbVFLaEV1UkdFVHRVTjFSZC9xS0hLZXZEUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjU4MjA3NDg6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NTAyODgzNDgzMjU1ODoxMkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjU4MjA3NDg6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ4NTQ5MTk3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTS9HXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNX19HLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQzRaWUljcnhXZC9zVXVqYTFUaFE4NVpzN29iZW5aUkFEN0drV3JneWh1RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MTkxMjg2NTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODU0OTIwMTIxNlwifSIKfQ=="  // PUT your SESSION_ID 


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
