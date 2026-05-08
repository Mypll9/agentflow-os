export class BaseAgent {
  constructor({ name, role }) {
    this.name = name;
    this.role = role;
  }

  async run(input, context = {}) {
    return {
      agent: this.name,
      role: this.role,
      input,
      contextKeys: Object.keys(context),
      output: `${this.name} processed the task using ${this.role}.`
    };
  }
}
