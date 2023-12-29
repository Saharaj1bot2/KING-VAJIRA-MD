const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("918768517505")
global.mongodb = process.env.MONGODB_URI || "mongodb://uwrr2obvrb4kbwnrvimy:rbgieh8nfk7EylXCh2D@byg4ii8uzy5rro8bcdfu-mongodb.services.clever-cloud.com:2008/byg4ii8uzy5rro8bcdfu"
global.port= process.env.PORT || 5000
global.email = 'botwhatsapp204@gmail.com'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/naveeddogar_' // saharaj_editor
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/09ab24679fb3a297a8905.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'HS REX' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU12NW9PWGwyZWVjdXB6ZXhEOXAvTlZ3Wmtha25Vdit0SkZNWExWdndGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRi9QNUVtVmxUTkRybnUrT28xZ2RHNVlYZENOU0lXdUNiczJmU2FQc2JUYz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSVV6UngyNE13dWgrd1FDNjRrUXp0TlgwRTB2YnpBT21OTVRGSnhDS0hVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWbE9VSnUrbjdONnpYaDJ3dDc1U2M3OHUrQnBqQ1BVN0E5OUV2bU96MFRJPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldOaUpiSzVVNEdiRGxCb2dsbG1tVU1LMTVSSmpxUE05MVdoZ3dmSFNsa3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlkczgrVU43dmQ4TjdiR0lRb3hpK0tCaGdsd21TS0tQUTJGTEJyYmpjV0U9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDZ3A0bEtMMVdtQ2RCN0dEbjNvdkdQWmxGWGU3cGp1d09SdG5Gekd6YUlCaEUrT1pPL080NnVIL3U4NUcwN2V1WkNxQTlLUy9STm9hSEU3RkdVa3pCQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjM0LCJhZHZTZWNyZXRLZXkiOiJqb0dMSFROdW94ejJaZkMvd00wYTg2M2dmL04zUFU1N3R3Q2VaSHN3dTBvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLQlpDa1hCdFFSQzFBZHhWckZ0X3l3IiwicGhvbmVJZCI6Ijg3YWE5MmJmLWE0NjctNDJiMS04MTM1LWEwNGIxYzE5YjkwYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtZGFVR1RQOHFZaE55ejNiaHhnOTRkWCswZkk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFSWnBTSmNobG4vYU1pOFJqUGtHNjNDSWZpVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l2RjFZZ0VFSjJtdXF3R0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRmt4NFk1MFFUb09NV2lUaWpmOTBrREF1aFdBRE56dk1melo5d2RxOEtoND0iLCJhY2NvdW50U2lnbmF0dXJlIjoicEs2azNUZGV4UVNLT292KzQ4ZlE1WThzc1BGTUFCbllvNmxJeW5Sb0crZ1BBMjFKUTFtc3RxNGhoa1NLTjBLVEpKRHBROG5YQTV1SVZnUDRTMlRlQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IjRXSkpnQlFSL0RYNXhKeUZTZFpQaTE1UWNNd1FJNDF4RjVkUHlqalRvVkY0aVNMN0VxK0lnODdPT2lwV01VOFVDTFNIRU1GRXB2bXpIV2N1MThwREJnPT0ifSwibWUiOnsiaWQiOiI5MTg3Njg1MTc1MDU6MjJAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE4NzY4NTE3NTA1OjIyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJaTWVHT2RFRTZEakZvazRvMy9kSkF3TG9WZ0F6Yzd6SDgyZmNIYXZDb2UifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDM4NDI1OTJ9' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split("Saharaj")[0] === undefined ? 'Vajira-Rathnayaka' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Vajira-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
