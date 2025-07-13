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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349129634410";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349129634410";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_36_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQwLFxuICAgICAgICAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI3LFxuICAgICAgICAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM3LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjU0LFxuICAgICAgICA5LFxuICAgICAgICA4MixcbiAgICAgICAgMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDkwLFxuICAgICAgICAxNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDY5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICA1LFxuICAgICAgICA5NixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMixcbiAgICAgICAgMjAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTksXG4gICAgICAgIDg2LFxuICAgICAgICA5NixcbiAgICAgICAgOTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDM1LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDcyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAsXG4gICAgICAgIDMwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjExLFxuICAgICAgICA5OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjExLFxuICAgICAgICA0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjExLFxuICAgICAgICA1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOCxcbiAgICAgICAgODgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjksXG4gICAgICAgIDM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic1ZLUE9GZE9xTEpLU211MUwweDl5TEEybTlGZ0tQNG1FNzlHVWN1b3ZqVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUkhuWGRJdnpScmEyYjUyMTFvYVlsd1wiLFxuICBcInBob25lSWRcIjogXCJlM2FjY2UxOC03YTM2LTQzY2UtYTA4MS0yYTQ3ZGM5MTE0MmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk4LFxuICAgICAgMjQwLFxuICAgICAgODAsXG4gICAgICAyMDgsXG4gICAgICA5OSxcbiAgICAgIDIyOCxcbiAgICAgIDk2LFxuICAgICAgNDAsXG4gICAgICAxODEsXG4gICAgICAxOTQsXG4gICAgICAxNTgsXG4gICAgICA1OSxcbiAgICAgIDIxMSxcbiAgICAgIDExMyxcbiAgICAgIDE5MCxcbiAgICAgIDQyLFxuICAgICAgNDcsXG4gICAgICA5NCxcbiAgICAgIDEwOSxcbiAgICAgIDIxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAxMjYsXG4gICAgICAyMDksXG4gICAgICA3NSxcbiAgICAgIDE1NSxcbiAgICAgIDQ4LFxuICAgICAgMjAwLFxuICAgICAgMjAxLFxuICAgICAgNjUsXG4gICAgICAyNDcsXG4gICAgICA4MCxcbiAgICAgIDI2LFxuICAgICAgMjgsXG4gICAgICAxMTgsXG4gICAgICA1NCxcbiAgICAgIDE3MixcbiAgICAgIDIwMSxcbiAgICAgIDE1MCxcbiAgICAgIDczLFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmYyb1NzUThNUE53d1lZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJMmVxZzgybXhQcXViVVc0SGdDdURpeEQ2OENST0Q3emUxZEJINHIzdjFjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdjeVRacktrWHNYZGlqRTN4aTljR0pYZUxOTVA4SU5HdU80TGJZM1ZDUjRpRHQwQzNNSklRcDZrZzJRSWlEaVZFV0xZdU1VOEN4TEp3emwxTWwzekF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVLWjZGNjhocEEyM0FTSFBSbVduTklxSmRCdCt5clhHMFdneFRhTXV3MXVxOTdsMnpVbWVsWXJYL212QlRhM3M5VS8rN3FTQTJhYlFibVUrU3B0M0FRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyOTYzNDQxMDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTAyNjI0MDk5NTk4NTgxOjE1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyOTYzNDQxMDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTIzOTIxODJcbn0iCn0="  // PUT your SESSION_ID 


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
