import { BaseAgent } from "../core/BaseAgent.js";

export class PlannerAgent extends BaseAgent {
  constructor() {
    super({ name: "PlannerAgent", role: "task decomposition and long-chain planning" });
  }

  async createPlan(objective) {
    return [
      `Analyze objective: ${objective}`,
      "Identify technical requirements",
      "Break work into executable subtasks",
      "Assign subtasks to specialized agents",
      "Define validation criteria"
    ];
  }
}
