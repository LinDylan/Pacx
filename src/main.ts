import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: Electron.BrowserWindow | null;

app.on('ready', () => {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    win.loadURL(url.format({
        protocol: 'file:',
        slashes: true,
        pathname: path.join(__dirname, '..', 'index.html')
    }));
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
});
