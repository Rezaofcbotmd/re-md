let handler = async (m, { conn, usedPrefix: _p }) => {


let buttonMessage= {
'document':{'url': 'http://s.id/0x404' },
'mimetype': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'fileLength': 22222222222222,
'pageCount': 200,
'contextInfo':{
'forwardingScore':200,
'isForwarded':true,
'externalAdReply':{
'mediaUrl': 'http://github.com/Rlxfly/re-md',
'mediaType': 2,
'previewType': 'pdf',
'title': 'Searching Source Code?',
'body': me,
'thumbnail': thumb2,
'sourceUrl': 'https://www.youtube.com/watch?v=qBJ0F9Ecax0'}},
'caption': 'https://github.com/Rezaofc',
'footer': me,
'buttons':[
{'buttonId': _p + 'menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId': _p + 'runtime','buttonText':{'displayText':'ʀᴜɴᴛɪᴍᴇ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted: m })

}

handler.command = /^(sc)$/i

export default handler
