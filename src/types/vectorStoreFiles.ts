import { IAutoChunkingStrategy, IStaticChunkStrategy } from "./vectorStores";

export interface IVectorStoreFilesRequest {
    file_id: string;
    chunking_strategy: IAutoChunkingStrategy | IStaticChunkStrategy;
}

export interface IVectorStoreFilesResponse {
    id: string;
    object: string;
    usage_bytes: number;
    created_at: number;
    vector_store_id: string;
    status: status;
    last_error: {
        code: code_status;
        message: string;
    };
    chunking_strategy: IStaticChunkStrategy | IOtherChunkingStrategy;
}

interface IOtherChunkingStrategy {
    type: string;
}

type status = "in_progress" | "completed" | "cancelled" | "failed";

type code_status = "server_error" | "rate_limit_exceeded";