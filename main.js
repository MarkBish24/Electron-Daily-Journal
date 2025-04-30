const { app, BrowserWindow } = require("electron");

//Set Environment
process.env.NODE_ENV = "development";

const isDev = process.env.NODE_ENV !== "production" ? true : False;

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: "Daily Journal",
    width: 800,
    height: 650,
    icon: `${__dirname}/assets/Icons/Journal-Icon.png`,
    resizable: isDev ? true : false,
  });

  mainWindow.loadFile("./app/index.html");
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on("ready", createMainWindow);
