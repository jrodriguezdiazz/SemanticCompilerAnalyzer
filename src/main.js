// Destructuring app and BrowserWindow from the electron module for cleaner code
const { app, BrowserWindow } = require("electron");

// Keep a global reference of the window object
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.setResizable(false);
  mainWindow.setMenu(null);
  mainWindow.loadFile("views/index.html");

  // Uncomment below to open DevTools by default
  // mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
