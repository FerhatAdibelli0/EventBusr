
// EventBus Class(such as REDUX)

function EventBus() {
 var eventTopics = {};

 this.addEventListener = function(eventName, listener) {
  if (!eventTopics[eventName] || eventTopics[eventName].length < 1) {
   eventTopics[eventName] = [];
  }
  eventTopics[eventName].push(listener);
 };

 this.emitEventListeners = function(eventName, params) {
  if (!eventTopics[eventName] || eventTopics[eventName].length < 1)
   return;
  eventTopics[eventName].forEach(function(listener) {
   listener(!!params ? params : {});
  });
 }

 this.removeListener = function(eventName, listener) {
  if (!eventTopics[eventName] || eventTopics[eventName].length < 1)
   return;
  // delete listener by event name
  delete eventTopics[eventName];
 };

 this.getListener = function(eventName){
  return eventTopics[eventName];
 }
}


function test() {
  var eventBus = new EventBus();
  var data1 = "some data for event1";
  var data2 = "some data for event2";
  // add listener to event1
  eventBus.addEventListener("event1", function (data) {
    console.log("listener1 listen event1 -> " + data);
  });

  // add listener to event1
  eventBus.addEventListener("event1", function (data) {
    console.log("listener2 listen event1 -> " + data);
  });

  // add listener to event2
  eventBus.addEventListener("event2", function (data) {
    console.log("listener1 listen event2 -> " + data);
  });

  // add listener to event2
  eventBus.addEventListener("event2", function (data) {
    console.log("listener2 listen event2 -> " + data);
  });

  eventBus.emitEventListeners("event1", data1);
  eventBus.emitEventListeners("event2", data2);
}

test();