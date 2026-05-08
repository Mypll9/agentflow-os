export function simulateToolCall(name, input) {
  return {
    tool: name,
    input,
    status: "simulated",
    output: `Tool ${name} executed successfully in simulation mode.`
  };
}
