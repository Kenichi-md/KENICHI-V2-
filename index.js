```javascript
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    puppeteer: { headless: true }
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log('Scan this QR code to connect KENICHI-XD bot');
});

client.on('ready', () => {
    console.log('KENICHI-XD Bot is ready!');
});

client.on('message', message => {
    if(message.body.toLowerCase() === 'hi') {
        message.reply('Hello! This is KENICHI-XD Bot 🤖');
    }
});

client.initialize();
```
