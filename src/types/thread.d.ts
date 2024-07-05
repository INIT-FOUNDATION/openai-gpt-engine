import { ICodeInterpreterTool, IFileSearchTool, IToolResources } from "./assistant";

export interface IThreadRequest {
    messages: IMessage[];
    content ?: string;
    attachments ?: IAttachment[];
    metadata: any;
    tool_resources: IToolResources;
    metadata ?: any;
}

export interface IThreadResponse {
    id: string;
    object: string;
    created_at: number;
    tool_resources: IToolResources;
    metadata: any;
}

interface IAttachment {
    file_id: string;
    tools: ICodeInterpreterTool[] | IFileSearchTool[];
}

interface IMessage {
    role: role;
}

type role = "user" | "assistant";