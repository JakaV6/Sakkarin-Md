let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Telkomsel [08133533848]
│ • Gopay  [085785694474]
│ • Dana  [08133533848]
│ • Follow Ig owner juga termasuk donasi
│   [https://Instagram.com/nan_sakrin]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/66855048169
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
