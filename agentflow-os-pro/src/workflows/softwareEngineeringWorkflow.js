import { PlannerAgent } from "../agents/PlannerAgent.js";
import { CoderAgent } from "../agents/CoderAgent.js";
import { ReviewerAgent } from "../agents/ReviewerAgent.js";
import { ValidatorAgent } from "../agents/ValidatorAgent.js";
import { MemoryStore } from "../memory/MemoryStore.js";
import { WorkflowRunner } from "../core/WorkflowRunner.js";

export async function runWorkflow(objective) {
  const memory = new MemoryStore();
  const runner = new WorkflowRunner({ memory });

  const planner = new PlannerAgent();
  const coder = new CoderAgent();
  const reviewer = new ReviewerAgent();
  const validator = new ValidatorAgent();

  runner.log("objective_received", { objective });

  const plan = await planner.createPlan(objective);
  runner.log("plan_created", { plan });

  const implementation = await coder.generateImplementation(plan[2]);
  runner.log("implementation_generated", implementation);

  const review = await reviewer.review(implementation);
  runner.log("review_completed", review);

  const validation = await validator.validate(review);
  runner.log("validation_completed", validation);

  const report = {
    objective,
    agentsUsed: ["PlannerAgent", "CoderAgent", "ReviewerAgent", "ValidatorAgent"],
    status: validation.passed ? "completed" : "needs_revision",
    confidence: validation.confidence,
    memoryEvents: memory.list().length
  };

  runner.log("final_report", report);
  return report;
}
