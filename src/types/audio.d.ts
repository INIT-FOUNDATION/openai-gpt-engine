import { model } from "./model";

export interface ISpeechRequest {
    model: model;
    input: string;
    voice: voice;
    response_format ?: response_format;
    speed ?: number;
}

export interface ITranscriptionRequest {
    file: File;
    model: model;
    language ?: string;
    prompt ?: response_format;
    response_format ?: response_format;
    temperature ?: number;
    timestamp_granularities ?: any;
}

export interface ITranslationRequest {
    file: File;
    model: model;
    prompt ?: response_format;
    response_format ?: response_format;
    temperature ?: number;
}

export interface ITranscriptionResponse {
    text: string;
    language: string;
    duration: string;
    words: IWord[];
    segments: ISegment[];
}

interface IWord {
    word: string;
    start: number;
    end: number;
}

interface ISegment {
    id: number;
    seek: number;
    start: number;
    end: number;
    text: string;
    tokens: any;
    temperature: number;
    avg_logprob: number;
    compression_ratio: number;
    no_speech_prob: number;
}

type voice = "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";

type response_format = "mp3" | "opus" | "aac" | "flac" | "wav" | "pcm";
