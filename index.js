const { app, BrowserWindow } = require("electron");

let mainWindow;

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "Daily Journal",
    width: 800,
    height: 650,
    icon: "./assets/Icons/Journal-Icon.png",
  });

  mainWindow.loadFile("./app/index.html");
}

app.on("ready", createMainWindow);
