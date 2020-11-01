/*eslint-env node */

const {contextBridge, ipcRenderer} = require('electron')

//Sample apis.
contextBridge.exposeInMainWorld('api', {
  alert: async (title: string, message: string) => {
    await ipcRenderer.invoke('alert', {title, message})
    return
  },
})
