const { app, BrowserWindow } = require("electron");

const path = require("path");

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

  mainWindow.loadFile(path.join(__dirname, "index.html"));
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
