export interface IBatchRequest {
    input_file_id: string;
    endpoint: string;
    completion_window: string;
    metadata ?: null;
}

export interface IBatchResponse {
    id: string;
    object: string;
    endpoint: string;
    errors: IErrors;
    input_file_id: string;
    completion_window: string;
    status: string;
    output_file_id: string;
    error_file_id: string;
    created_at: number;
    in_progress_at: number;
    expires_at: number;
    finalizing_at: number;
    completed_at: number;
    failed_at: number;
    expired_at: number;
    cancelling_at: number;
    cancelled_at: number;
    request_counts: IRequestCounts;
    metadata: any;
}

interface IErrors {
    object: string;
    data: IErrorData;
}

interface IErrorData {
    code: string;
    message: string;
    param ?: string;
    line ?: number
}

interface IRequestCounts {
    total: number;
    completed: number;
    failed: number;
}