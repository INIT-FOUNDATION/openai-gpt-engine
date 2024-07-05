import { model } from "./model";

export interface IEmbeddingsRequest {
    input: string;
    model: model;
    encoding_format ?: encoding_format;
    dimensions ?: number;
    user ?: string;
}

export interface IEmbeddingsResponse {
    index: number;
    embedding: any;
    object: string;
}

type encoding_format = "float" | "base64"