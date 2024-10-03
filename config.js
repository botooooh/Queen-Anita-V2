//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "limiteetcontinuite@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://fictionhorizon.com/wp-content/uploads/2023/08/FeralGojo.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2250151191073";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0xNMDVvenpuWCtoZldET2lsWU1FSWdLaDVYM01jQ0JFY0VEbHc3MUIwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWZuL1FGbDVnL2lTL3ZNNTFQREozL1A1d3F5RVpFSFVsY3BVTFVVYlBRND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0R3NiM0VBaHVUNDhOYWNsKzFJazcxNVFEVElRZlYyR0NGV2dIS0pJSUZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtditLTk9qbWZSNFBsc3k1Y0FDbVNpQUxTbGZpMzlFOTNYS3MwK2JtT0ZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNPdENDek1oWVVldlZoMEU4cGZyUnFHNEV3L3JvMnpUQ0NFb1h0eTR4bDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZ5OGdJTi9reEpseDNEZldmVzM5TW5YL0FYSjlPOTJvekczWkw3ckdlQkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUs1K1JFN1g1dEhNdHNoaUxyZ2F4MVhhb1R4RStYU3NVa3MwUFJRdUVsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0kwTDA0dTVqMmwrNmZOT0czVFVqb0xaUnJVb0RkUkIvMU1HcHpTbHdodz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0yeW5MNnM2eEk5c3lvL3kwa2VPR0ovS0M0TFVRbzRWU2s2WEsyUElaOWRTVjE5SkpYSURNSzdPRVl0WEIrTEpFTEVhaFc0N0k3M2VuMjN3MmU1VURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzUsImFkdlNlY3JldEtleSI6IkYrVW13MGsrYS80Q0VOT01XaVhGTlYrdENWMml5dVJ5cy9OcjAwbXBwNmc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ims3Wi1fWENjUnZpVFBHNW85NTlRLXciLCJwaG9uZUlkIjoiNTIzN2U5NzctNzQ1My00MTkzLWJkOWEtMmFhZWIxZDc2ZWQ5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im8wMWU2UTBobktNV0M5aC9WSWtzQ3pXeUxCcz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkxlL0U1U0JsU0xmVUl4TkN4dzVnQUhta09jPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWlpMjljQkVOanU5N2NHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiODRTbk1uSUtPM25Obk44d0E1SCtRNDUydHBFYm5YWEpNbGNLRngrQjNuZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNHpEanI4emdSUWdFanBLeDVJTEk0V0llTzN0bmZFUFJ4U254bkt4TFNGc2c1V0owc0J2THVJcEpZSE96REpqQlFEZzMzNUZVZDZUc1lldjA2ZE80Q3c9PSIsImRldmljZVNpZ25hdHVyZSI6Im9qTFE3a3A3OXg0SEFOMWJKcDQwejZiYzZZWTV0TFFMODQ2YzlSVW5JYVJwUi9vWDNJbnV3WWdOeUtQbVRycmF2SEVrbzBEN2trMDRqWU42ckgrckNRPT0ifSwibWUiOnsiaWQiOiIyMjU1MTE5MTA3Mzo5NkBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjU1MTE5MTA3Mzo5NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmT0Vwekp5Q2p0NXpaemZNQU9SL2tPT2RyYVJHNTExeVRKWENoY2ZnZDU0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3OTE5OTc1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFqQSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`King_Gojo-V2™`",
  author: process.env.PACK_AUTHER || "King_Gojo-V2",
  packname: process.env.PACK_NAME || "G O J O",
  botname: process.env.BOT_NAME || "King_Gojo-V2",
  ownername: process.env.OWNER_NAME || "🗿.ᚽᐯᚣᚻₛₖᵤₗₗ.👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "G O J O").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
