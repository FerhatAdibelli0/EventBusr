const EventEmitter = require("events");

class EventBus extends EventEmitter {
  constructor() {
    super();
    this.eventTopics = {};
  }
  addListener = function (eventName, listener) {
    if (
      !this.eventTopics[eventName] ||
      this.eventTopics[eventName].length < 1
    ) {
      this.eventTopics[eventName] = [];
    }
    this.eventTopics[eventName].push(listener);
  };
  emitListeners = function (eventName, params) {
    if (!this.eventTopics[eventName] || this.eventTopics[eventName].length < 1)
      return;
    this.eventTopics[eventName].forEach(function (listener) {
      listener(params ? params : {});
    });
  };
  removeListener = function (eventName) {
    if (!this.eventTopics[eventName] || this.eventTopics[eventName].length < 1)
      return;
    delete this.eventTopics[eventName];
  };
  getListener = function (eventName) {
    return this.eventTopics[eventName];
  };
}

const Logger = new EventBus();

module.exports = Logger;
