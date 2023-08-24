/*
Created & Base By ArxzyDev
    Sell ​​Sc? Lower Hell
    My Contact https://wa.me/6289513081052
    
   Notes:
   If you want to recode, please, but remember the credit
   Sc Adrian-MD will continue to be updated.
   If You Want To Buy Apikey Chat Owner Lolhuman
   
   This Script Is Modified / Rewritten By YoriMikuXD/Yori Hosting And This Script Is 89% No Enc

    If there is no tool to run the bot script, please buy a panel at Yori Hosting's owner, contact: wa.me/6282332208755
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = '_' // LOLHUMAN
global.rosekey = '_' // ROSE

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'Chuuti Suduu WA BOT'
global.namaowner = 'DILLA EDITZ'

//—————「 Setting Owner 」—————//
global.owner = ['94764570094']
global.nomerowner = '94764570094'
global.premium = ['94764570094']

//—————「 Set Wm 」—————//
global.packname = 'By DILLA EDITZ\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.author = 'Chuuti Suduu WA BOT By DILLA EDITZ'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {

    success: '🤗Done, OK ',
    admin: '❗This Command Can Only Be Used By Group Admins !',
    botAdmin: '❗This Command Can Only Be Used When a Bot Becomes a Group Admin!',
    owner: '❗This command can only be used by the owner!',
    group: '❗This command can only be used in group chats!',
    private: '❗This command can only be used in private chat!',
    bot: '🤖 Bot Number Users Special Features !',
    wait: '⏳ Currently Processing !',
    endLimit: '🕊️ Your Daily Limit Has Been Expired, The Limit Will Reset Every 12 Hours!',
    error: '🚫 Feature is Error !',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 15
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/96acfac8b3c9250201b90.jpg'
global.link = 'https://www.youtube.com/@sl_dilla_gaming'
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
