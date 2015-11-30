'use strict'

const app = require('app')
const BrowserWindow = require('browser-window')

var mainWindow = null

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('ready', function() {
  mainWindow = new BrowserWindow({ width: 400, height: 360, transparent: true, titleBarStyle: 'hidden', resizable: false })
  mainWindow.loadUrl('file://' + __dirname + '/index.html')
  mainWindow.on('closed', function() {
    mainWindow = null
  })
})
