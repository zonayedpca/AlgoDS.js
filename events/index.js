const Event = require('./event');

const event = new Event();

// Create a new Event
event.on('click', () => {
  console.log('Click Event One');
});

// Put another callback
event.on('click', () => {
  console.log('Click Event Two');
})

// Create another Event
event.on('touch', () => {
  console.log('Touched');
});

// Trigger Click
event.trigger('click');

// Trigger touch
event.trigger('touch');

// Delete all events
event.off('click');
event.off('touch');
