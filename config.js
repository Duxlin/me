/**
   * Create By Dux
   * Base By Quadhir
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.ownername = '𝕯U͜͡𝖃-𝕭𝕺𝙏'
// Other
global.owner = ['2347082252014','2347046411495']
global.premium = ['2347082252014','2347046411495']
global.packname = 'Hisoka Morrow'
global.author = 'WhatsApp Bot'
global.wlcm = ['Hey🤭❣️, I am 𝕯U͜͡𝖃-𝕭𝕺𝙏🦋']
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Group Admin Special Features!',
    botAdmin: '𝕯U͜͡𝖃-𝕭𝕺𝙏 must be an admin first!',
    owner: 'Owners Special Features',
    group: 'Feature is used only in Groups!',
    private: 'Feature is used only in private chat!',
    bot: 'Special Features For Bot Number Users',
    wait: '𝖑𝖔𝖆𝖉𝖎𝖓𝖌...',
    endLimit: 'Your daily limit has been exhausted, The limit will be reset every 12 hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/jo.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }
const fs = require('fs');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
DATABASE_URL = process.env.DATABASE_URL === undefined ? './bot.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
module.exports = {
    READ_COMMAND: convertToBool(process.env.READ_COMMAND) || true,
    SESSION: process.env.SESSION || '',
    IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f","deb80cd12ababea1c9b9a8ad6ce3fab2","78c84c62b32a88e86daf87dd509a657a"],
    RG: process.env.RG || '919074309534-1632403322@g.us',
    '',
    MODE: process.env.MODE || 'private',
    },
    
    };
Footer

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
