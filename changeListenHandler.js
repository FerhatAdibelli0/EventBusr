const Logger = require("./eventBus");

Logger.addListener("ferhat", (data) => {
  console.log(data);
});