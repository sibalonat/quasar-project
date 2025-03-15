/**
 * This file is used specifically for security reasons.
 * Here you can access Nodejs stuff and inject functionality into
 * the renderer thread (accessible there through the "window" object)
 *
 * WARNING!
 * If you import anything from node_modules, then make sure that the package is specified
 * in package.json > dependencies and NOT in devDependencies
 *
 * Example (injects window.myAPI.doAThing() into renderer thread):
 *
 *   import { contextBridge } from 'electron'
 *
 *   contextBridge.exposeInMainWorld('myAPI', {
 *     doAThing: () => {}
 *   })
 *
 * WARNING!
 * If accessing Node functionality (like importing @electron/remote) then in your
 * electron-main.ts you will need to set the following when you instantiate BrowserWindow:
 *
 * mainWindow = new BrowserWindow({
 *   // ...
 *   webPreferences: {
 *     // ...
 *     sandbox: false // <-- to be able to import @electron/remote in preload script
 *   }
 * }
 */


import { contextBridge, ipcRenderer } from 'electron'
// import { ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('notification', {
  // ipcRenderer: ipcRenderer
  // send: (title: string, body: string) => {
  //   // ipcRenderer.send('notification', title, body)
  //   console.log('notification sent:', title, body)
  // }
  // send: (title: string, body: string) => {
  //   console.log('notification sent:', title, body)
  // }
  show: (title: string, body: string) => {
    console.log('notification sent:', title, body);
    ipcRenderer.invoke('notification:show', { title, body })
      .then(result => console.log(result))
      .catch((error) => {
        console.error('Failed to send notification:', error);
      });


  }
})
