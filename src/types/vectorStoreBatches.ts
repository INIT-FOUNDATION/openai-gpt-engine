import { IAutoChunkingStrategy, IFileCounts, IStaticChunkStrategy } from "./vectorStores";

export interface IVectorStoreBatchesRequest {
    file_id: string;
    chunking_strategy: IAutoChunkingStrategy | IStaticChunkStrategy;
}

export interface IVectorStoreBatchesResponse {
    id: string;
    object: string;
    created_at: number;
    vector_store_id: string;
    status: status;
    file_counts: IFileCounts;
}

type status = "in_progress" | "completed" | "cancelled" | "failed";