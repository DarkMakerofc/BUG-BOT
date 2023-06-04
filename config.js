/*

😈 𝗕𝗨𝗚 𝗕𝗢𝗧 𝗠𝗗 😈






































































































































*/
const fs = require('fs')
const chalk = require('chalk')
const {sample} = require('lodash')

global.owner = ['94719574492']
global.no_block = ['00000000000','0000000000']
global.inbox_block = false
global.sendalive = true
mess = {
	success: 'Done sir ✓',
	block: '⚠️ Inbox Block',
	owner:'Only Owner !'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
