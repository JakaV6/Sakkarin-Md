let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
conn.reply(global.owner[0] + `@s.whatsapp.net`, ` *Ayaang ada yg manggil tuh, mau sewa mungkin:v*`, m)

  conn.reply(m.chat, `
Ngapain lu manggil owner ku dek?
kalau mau sewa chat pribadi aja
Gak usah Malu-malu
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@66855048169 |@66855048169/i
handler.command = new RegExp

module.exports = handler
