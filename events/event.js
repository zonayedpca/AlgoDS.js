class Event {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if(this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  trigger(eventName) {
    if(this.events[eventName]) {
      for(let callback of this.events[eventName]) {
        callback();
      }
    }
  }

  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Event;
