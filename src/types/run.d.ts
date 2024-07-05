import { ICodeInterpreterTool, IFileSearchTool, IFunctionTool } from "./assistant";
import { IUsage } from "./completion";
import { model } from "./model";
import { IAttachment, role } from "./thread";

export interface IRunRequest {
    assistant_id: string;
    model: model;
    instructions ?: string;
    additional_instructions ?: string;
    additional_messages ?: IAdditionalMessage;
    tools ?: ICodeInterpreterTool[] | IFileSearchTool[] | IFunctionTool[];
    metadata ?: any;
    temperature ?: number;
    top_p ?: number;
    stream ?: boolean;
    max_prompt_tokens ?: number;
    max_completion_tokens ?: number;
    truncation_strategy: ITruncationStrategy;
    tool_choice ?: string;
    parallel_tool_calls ?: boolean;
    response_format ?: string;
}

export interface IRunResponse {
    id: string;
    object: string;
    created_at: number;
    thread_id: string;
    assistant_id: string;
    status: status;
    required_action: IRequiredAction;
    last_error: {
        code: error_code;
        message: string;
    };
    expires_at ?: number;
    started_at ?: number;
    cancelled_at ?: number;
    failed_at ?: number;
    completed_at ?: number;
    incomplete_details ?: {
        reason: string;
    };
    model: string;
    tools: ICodeInterpreterTool[] | IFileSearchTool[] | IFunctionTool[];
    metadata: any;
    usage: IUsage;
    temperature ?: number;
    top_p ?: number;
    max_prompt_tokens ?: number;
    max_completion_tokens ?: number;
    truncation_strategy: ITruncationStrategy;
    tool_choice ?: string;
    parallel_tool_calls ?: boolean;
    response_format ?: string;
}

interface IRequiredAction {
    type: string;
    submit_tool_outputs: {
        tool_calls: {
            id: string;
            type: string;
            function: {
                name: string;
                arguments: string;
            }
        }
    }
}
interface ITruncationStrategy {
    type: string;
    last_messages ?: number
}

interface IAdditionalMessage {
    role: role;
    content: string;
    attachments ?: IAttachment[];
    metadata: any;
}

type status = "queued" | "in_progress" | "requires_action" | "cancelling" | "cancelled" | "failed" | "completed" | "incomplete" | "expired";

type error_code = "server_error" | "rate_limit_exceeded" | "invalid_prompt";