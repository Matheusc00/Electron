//console.log("Hello, World!");

const { app, BrowserWindow , nativeTheme} = require('electron')
const path = require('path');

const createWindow = () => {
  //nativeTheme.themeSource = 'light'// Set the theme to dark mode
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'src','public', 'img', 'pc.png'),
    //resizable: false
    //autoHideMenuBar: true,
    //titleBarStyle: 'hidden'
  });
  win.loadFile(path.join(__dirname, 'src', 'views', 'index.html'));
};

const aboutWindow = () => {
  const about = new BrowserWindow({
    width: 360,
    height: 220,
    icon: path.join(__dirname, 'src', 'public', 'img', 'pc.png'),
    autohideMenuBar: true,
    resizebeble: false
  })

  about.loadFile(path.join(__dirname, 'src', 'views', 'sobre.html'));
}  

app.whenReady().then(() => {
  createWindow()
  aboutWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});

app.on('window-all-closed',() => {
  if(process.plataform !== 'darwin') app.quit()
});

