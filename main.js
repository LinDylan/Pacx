const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

app.on('ready', () => {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    win.loadURL(url.format({
        protocol: 'file:',
        slashes: true,
        pathname: path.join(__dirname, 'index.html')
    }));
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
});
