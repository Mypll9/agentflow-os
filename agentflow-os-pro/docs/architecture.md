# AgentFlow OS Architecture

AgentFlow OS is structured around specialized agents connected through a workflow runner and memory store.

## Components

1. Planner Agent
   - Converts high-level objectives into executable subtasks.
2. Coder Agent
   - Generates implementation plans and code structure.
3. Reviewer Agent
   - Reviews output quality, maintainability, and correctness.
4. Validator Agent
   - Simulates tests and validates execution quality.
5. Memory Store
   - Stores workflow state, intermediate outputs, and execution history.

## Long-Context Strategy

The system is designed to retain:
- user objective
- plan history
- generated artifacts
- validation results
- execution traces
- agent handoff records

This makes the project suitable for evaluating long-context reasoning models and high-token workflows.
