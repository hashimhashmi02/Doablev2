import { Sandbox } from "e2b"
import { AgentResult, TextMessage } from "@inngest/agent-kit";
import { SANDBOX_TIMEOUT } from "./types";

export async function getSandbox(sandboxId: string){
    try {
        // IMPORTANT: Must pass timeoutMs when connecting, otherwise it resets to default 5min
        const sandbox = await Sandbox.connect(sandboxId, { timeoutMs: SANDBOX_TIMEOUT });
        return sandbox;
    } catch (error: any) {
        // If sandbox is paused or not found, throw a descriptive error
        if (error.name === 'NotFoundError' || error.message?.includes('not found')) {
            throw new Error(`Sandbox ${sandboxId} was paused or deleted. The agent took too long between steps and the sandbox timed out.`);
        }
        throw error;
    }
};


export function lastAssistantTextMessageContent(result:AgentResult){
    const lastAssistantTextMessageIndex = result.output.findLastIndex(
        (message) => message.role === "assistant",
    );

    const message = result.output[lastAssistantTextMessageIndex] as
    | TextMessage
    | undefined;

    return message?.content
    ? typeof message.content ==="string"
    ? message.content
    : message.content.map((c) => c.text).join(" ")
    :undefined;

}