export class WorkflowRunner {
  constructor({ memory }) {
    this.memory = memory;
  }

  log(step, payload) {
    const event = { step, payload };
    this.memory.add(event);
    console.log(`[workflow] ${step}`, JSON.stringify(payload, null, 2));
  }
}
