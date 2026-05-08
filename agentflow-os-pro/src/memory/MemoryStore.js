export class MemoryStore {
  constructor() {
    this.events = [];
  }

  add(event) {
    this.events.push({
      timestamp: new Date().toISOString(),
      ...event
    });
  }

  list() {
    return this.events;
  }
}
