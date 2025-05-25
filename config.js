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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349049769396";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349049769396";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_51_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDgsXG4gICAgICAgIDgzLFxuICAgICAgICA5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDY4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDMsXG4gICAgICAgIDg0LFxuICAgICAgICA2LFxuICAgICAgICA5NixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgODIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyLFxuICAgICAgICAxODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDExLFxuICAgICAgICAxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg5LFxuICAgICAgICA1NSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY2pJbktsYXRkRTk2cWxrT2lwZDN4SlJrMml4TWtkY01RWDRhdGRxUzZ6WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidHAwVVpLR2VSRnluU1NNWVpiY3hhUVwiLFxuICBcInBob25lSWRcIjogXCI0YTgzN2IyYS1iZTM3LTRlYmEtOThhZi0xYWIxMjU4ODFiOWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAxOTEsXG4gICAgICAxOTAsXG4gICAgICAxMzIsXG4gICAgICAxNjMsXG4gICAgICA1OSxcbiAgICAgIDIwMyxcbiAgICAgIDgzLFxuICAgICAgMTg4LFxuICAgICAgNCxcbiAgICAgIDIxLFxuICAgICAgMTIyLFxuICAgICAgMjIsXG4gICAgICAxNDUsXG4gICAgICAxNzIsXG4gICAgICAxMzcsXG4gICAgICAzMixcbiAgICAgIDIxNyxcbiAgICAgIDIwMixcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICA4OCxcbiAgICAgIDE1MSxcbiAgICAgIDExMSxcbiAgICAgIDgsXG4gICAgICAxMTMsXG4gICAgICAxNDUsXG4gICAgICAyNDAsXG4gICAgICAxNzMsXG4gICAgICAyMjUsXG4gICAgICAyOCxcbiAgICAgIDIxNSxcbiAgICAgIDUwLFxuICAgICAgMjUyLFxuICAgICAgMjMwLFxuICAgICAgMTY4LFxuICAgICAgMjAzLFxuICAgICAgMzgsXG4gICAgICAxMTAsXG4gICAgICAxODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdm5oZm9LRU5pYXljRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxWN2JtTXVxQS9sQXMyQ1BIVXhVbG9FUXlEUnRKYmZaR3QwWjZmM044Qkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK0hpeGNyVEdSbkVJNXFUOTNnYVV1K1J0YVF2RkQ5NlBJMXBqTnBaY3ZoS3ZsQ2Y4dU9tMkwvNFg5cGxocEFWNGE4b011N0ZYVTZyMEtDMTlKSTBmZ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieUFUOXkydXA3RHFrbSswK2pSV1EvNEJwTFVsczI3bEJ5ZGNKaHN1SHF5QlBmMGJSOWJXL0xFU3h6WDN5YVd1cmJ4dmJhSmpWRmU0TlgwM2tQQXlvaGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQ5NzY5Mzk2OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NTIxMjk5NTMyNjA0MTo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk5PIE5BTUVcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDk3NjkzOTY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0ODEyNzA2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZ1eVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnV5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiR2JXaGhJUEwxaDVyMXo1K2VHaSswZVNjNDlsTmZ4UFNBTHp4YXQvMWpPaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTQwMzAyMzMxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDgxMjcwNzA5NzlcIn0iCn0="  // PUT your SESSION_ID 


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
