/*eslint-env node */

import {app, BrowserWindow, ipcMain, dialog} from 'electron'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'

app.on('ready', async () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, '/preload.js'),
    },
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    if (isDev) {
      mainWindow.webContents.openDevTools()
    }
  })

  const devPath = 'http://localhost:9000'
  const prodPath = path.join(__dirname, 'index.html')
  const url = isDev ? devPath : prodPath

  mainWindow.setMenu(null)
  mainWindow.loadURL(url)
})

app.on('ready', () => {
  if (isDev) {
    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS,
      MOBX_DEVTOOLS,
    } = require('electron-devtools-installer')
    installExtension([REACT_DEVELOPER_TOOLS, MOBX_DEVTOOLS])
      .then((name: any) => console.log(`Added Extension: ${name}`))
      .catch((err: any) => console.log('An error occurred: ', err))
  }
})

app.on('window-all-closed', app.quit)

ipcMain.handle('alert', async (event, {title, message}) => {
  dialog.showMessageBox({
    type: 'info',
    title,
    message,
  })
})
