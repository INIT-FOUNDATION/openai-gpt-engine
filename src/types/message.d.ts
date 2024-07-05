import { ICodeInterpreterTool, IFileSearchTool } from "./assistant";
import { IAttachment, role } from "./thread";

export interface IMessageRequest {
    role: role;
    content: string;
    attachments?: IAttachment[];
    metadata?: any;
}

export interface IMessageResponse {
    id: string;
    object: string;
    created_at: number;
    thread_id: string;
    status: status;
    incomplete_details: IIncompleteDetails;
    completed_at: number;
    incomplete_at: number;
    role: role;
    content: IImageFile[] | IImageUrl[] | IText[];
    assistant_id: string;
    run_id: string;
    attachments: IAttachment[];
}

interface IImageFile {
    type: string;
    image_file: {
        file_id: string;
        detail: string;
    };
}

interface IImageUrl {
    type: string;
    image_url: {
        url: string;
        detail: string;
    }
}

interface IText {
    type: string;
    text: {
        value: string;
        annotations: IFileCitation[] | IFilePath[];
    };    
}


interface IFileCitation {
    type: string;
    text: string;
    file_citation: {
        file_id: string;
    };
    start_index: number;
    end_index: number;
}

interface IFilePath {
    type: string;
    text: string;
    file_path: {
        file_id: string;
    };
    start_index: number;
    end_index: number;
}

interface IIncompleteDetails {
    reason: string
}

type status = "in_progress" | "incomplete" | "completed"