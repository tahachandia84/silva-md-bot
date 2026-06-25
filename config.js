const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(val, defaultOn = true) {
    if (val === undefined || val === null || val === '') return defaultOn;
    return val.toLowerCase() !== 'false';
}

module.exports = {
    SESSION_ID:            process.env.SESSION_ID || "RIAM~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME90OVlrM2VSOCtINU9kUkRiN3h5djBaS3VtdVRPUCs4SE1mc1pyLzBHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUlmenFNYVUxQmx4Z0RCOTFzM2hpQjh4SHVBZnIxUGJKckRkaDVQTkZTVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSitHdDNvSzZTQU5PWTAxQlFCeFZmYkZCdjNleUZyM2psbXFONVFsSW5zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRenRORnI1VjZ5MHBERmN1alJYczNGSzRFWDVyMWY2TkpVMGI2dzdKT1JBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtKTXYxaDJyQ2VZKzhxU3VhYjdtcmdncEJKd1dGbGlrZUpubTltV08wbDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklMQlFDbEM4clozZEtDYkQ1VHRRWmV6ZE9URXF1Y3dBR1pha2d2UTRvVWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0JRY2gvNkxTS3BjcEVqMDdFK0ljTjBVbkk5VDJzZjk3dWt6SzJQZndIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3JUN2Z4N2FBaFdDMStFS2xVYjVvbVhTWjgvaVgzem95WjYweVZvL3BSZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJnY1NNRkQ1RkRaNDNwdzBTK3NXREZhczJ0dG82WVJGL0lOZHFaeTBJVFpHSkRSQjZoRkU3R05ZNXFVeWdhN3Zudno2TkNjcGQ4YytqdU1pVFA1TGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU5LCJhZHZTZWNyZXRLZXkiOiI2L29qWmJvZFBzdENrNnhWcnpvWXlRcUYwNmxYWHlkNmtUbTNKQkNNbUt3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ijk2NVNFSlJEIiwibWUiOnsiaWQiOiI5MjMyOTE0ODkwNTU6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJJJ20gbm90IHlvdXIiLCJsaWQiOiIxNDY2Njk2MDk5OTIyNjg6NkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09XMnFlc0RFUFdGOXRFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxRUGFzenZ6UzBQQTZ4aDRuelk4aldsUFNIZWJxTDJ2MVBMYmVVbjAyVUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJWNmNMdGlQSHNHUHp0N0g1S1NQVElFcUFBaGMxeDVvNU9hY2NaOGk1VVVnQ053eGFsd3p5K0VISHdVa1NOUy8razQ1eEhadHF1MTN4QU10TFg4eURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFRjhjZzEwY3BiQS9XeEQvUjV2ZjRaVGRmQWQ0WUpCWDgrLzVzMVRDU2tVbXpDVzh1UVJwS01MZ0gzY1JBdkpGTjdiTHgvRGI4RCsyTUg5cTJOVi9ndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE0NjY2OTYwOTk5MjI2ODo2QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTMEQyck03ODB0RHdPc1llSjgyUEkxcFQwaDNtNmk5cjlUeTIzbEo5TmxCIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWtJRWdnQyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3ODI0MTYxMzUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUCtrIn0=",
    // PREFIX supports comma-separated list: ".,!,/,?"
    // Use "any" to accept any leading symbol, or "" / "none" for no prefix
    PREFIX:                process.env.PREFIX || ".",
    BOT_NAME:              process.env.BOT_NAME || "TAHA KHAN",
    OWNER_NUMBER:          process.env.OWNER_NUMBER || "923474771404",
    OWNER_NAME:            process.env.OWNER_NAME || "TAHA KHAN",
    DESCRIPTION:           process.env.DESCRIPTION || "TAHA MD Bot",
    ALIVE_IMG:             process.env.ALIVE_IMG || "https://i.imgur.com/1tUVG85.jpeg",
    LIVE_MSG:              process.env.LIVE_MSG || "Taha MD is active",
    MODE:                  process.env.MODE || "both",
    AUTO_STATUS_SEEN:      toBool(process.env.AUTO_STATUS_SEEN,      true),
    AUTO_STATUS_REACT:     toBool(process.env.AUTO_STATUS_REACT,     true),
    AUTO_STATUS_REPLY:     toBool(process.env.AUTO_STATUS_REPLY,     false),
    AUTO_STATUS_MSG:       process.env.AUTO_STATUS_MSG || "Seen by Taha MD",
    CUSTOM_REACT_EMOJIS:   process.env.CUSTOM_REACT_EMOJIS || "❤️,🔥,💯,😍,👏,💙,🙌",
    Status_Saver:          process.env.Status_Saver  || process.env.STATUS_SAVER  || 'false',
    STATUS_REPLY:          process.env.STATUS_REPLY  || 'false',
    STATUS_MSG:            process.env.STATUS_MSG    || 'TAHA MD 💖 SUCCESSFULLY VIEWED YOUR STATUS',
    READ_MESSAGE:          toBool(process.env.READ_MESSAGE,          false),
    AUTO_REACT_NEWSLETTER:   toBool(process.env.AUTO_REACT_NEWSLETTER,   true),
    ANTI_BAD:              toBool(process.env.ANTI_BAD,              false),
    ALWAYS_ONLINE:         toBool(process.env.ALWAYS_ONLINE,         true),
    AUTO_TYPING:           toBool(process.env.AUTO_TYPING,           true),
    AUTO_RECORDING:        toBool(process.env.AUTO_RECORDING,        false),
    DELETE_LINKS:          toBool(process.env.DELETE_LINKS,          false),
    ANTIDELETE_GROUP:      toBool(process.env.ANTIDELETE_GROUP,      true),
    ANTIDELETE_PRIVATE:    toBool(process.env.ANTIDELETE_PRIVATE,    true),
    ANTILINK:              toBool(process.env.ANTILINK,               false),
    ANTICALL:              toBool(process.env.ANTICALL,               true),
    ANTIVV:                toBool(process.env.ANTIVV,                 true),
    DEBUG:                 toBool(process.env.DEBUG,                 false),
    THEME:                 (process.env.THEME || 'silva').toLowerCase().trim(),
    GREETING:              process.env.GREETING || '',
    APP_URL:               process.env.APP_URL || '',
    INSTAGRAM_SESSION:     process.env.INSTAGRAM_SESSION || '',
};
