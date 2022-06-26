const Logger = require("./eventBus");

Logger.on("updatedData", (data) => {
  console.log(data);
});

