const { app, BrowserWindow } = require("electron");
// const Main = require("electron/main");

const path = require("path");
const axios = require("axios");

if (require('electron-squirrel-startup')) return app.quit();

const loadMainWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    icon: "src/icons/icon.png",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.maximize();

  mainWindow.loadFile(path.join(__dirname, "index.html"));
  mainWindow.webContents.on("before-input-event", (event, input) => {
    if (input.type === "keyDown") {
      switch (input.key) { // This code is safer than my password
        case "ArrowRight":
          mainWindow.webContents.executeJavaScript("load(1)")
          break;
        case "ArrowLeft":
          mainWindow.webContents.executeJavaScript("load(-1)")
          break;
        case "Enter":
          mainWindow.webContents.executeJavaScript("base()")
          break;
      }
    }


  });

  mainWindow.webContents.on('new-window', function(e, url) {
    e.preventDefault();
    require('electron').shell.openExternal(url);
  });

  ;
}

// Quit app when all windows are closed
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Open app when no window is open if it is activated
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    loadMainWindow();
  }
});

// Load window when we're ready
app.on("ready", loadMainWindow);
