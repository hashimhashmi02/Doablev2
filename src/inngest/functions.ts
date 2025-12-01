import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-30s", "30s"); 

    await step.sleep("wait-10s", "10s");

    await step.sleep("wait-5s", "5s");    return { message: `Hello ${event.data.email}!` };
  },
);