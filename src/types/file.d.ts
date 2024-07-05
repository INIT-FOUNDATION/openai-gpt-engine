export interface IFileRequest {
    file: File;
    purpose: string;
}

export interface IFileResponse {
    id: string;
    bytes: number;
    created_at: number;
    filename: string;
    purpose: purpose;
    object: string;
}

type purpose = "assistants" | "assistants_output" | "batch" | "batch_output" | "fine-tune" | "fine-tune-results" | "vision";