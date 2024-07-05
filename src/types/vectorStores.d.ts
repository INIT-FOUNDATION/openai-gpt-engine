export interface IVectorStoresRequest {
    file_ids ?: string[];
    name ?: string;
    expires_after ?: IExpiresAfter;
    chunking_strategy ?: IAutoChunkingStrategy | IStaticChunkStrategy;
    metadata ?: any;
}

export interface IVectorStoreResponse {
    id: string;
    object: string;
    created_at: number;
    name: string;
    usage_bytes: number;
    file_counts: IFileCounts;
    status: status;
    expires_after: IExpiresAfter;
    expires_at ?: number;
    last_active_at ?: number;
    metadata: any; 
}

interface IExpiresAfter {
    anchor: string;
    days: number;   
}

interface IFileCounts {
    in_progress: number;
    completed: number;
    failed: number;
    cancelled: number;
    total: number;
}

interface IAutoChunkingStrategy {
    type: string;
}

interface IStaticChunkStrategy {
    type: string;
    static: {
        max_chunk_size_tokens: string;
        chunk_overlap_tokens: string;
    };
}

type status = "expired" | "in_progress" | "completed";