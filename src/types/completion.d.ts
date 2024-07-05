import { IModel, model } from "./model";

export interface ICompletionRequest {
    model: model;
    prompt: string;
    best_of ?: number;
    echo ?: boolean;
    frequency_penalty ?: number;
    logit_bias ?: any;
    logprobs ?: number;
    max_tokens ?: number;
    n ?: number;
    presence_penalty ?: number;
    seed ?: number;
    stop ?: string | string[];
    stream ?: boolean;
    stream_options ?: {
        include_usage ?: boolean;
    };
    suffix ?: string;
    temperature ?: number;
    top_n ?: number;
    user ?: string;
    messages: IMessage[]
}

export interface ICompletionResponse {
    id: string;
    choices: IChoice[];
    created: number;
    id: string;
    model: string;
    object: string;
    usage: IUsage;
    created: number;
    model: string;
    system_fingerprint: string;
    object: string;
}

export interface IMessage {
    role: role;
    content: string;
}

interface ILogProbs {
    text_offset: any;
    token_logprobs: any;
    tokens: any;
    top_logprobs: any;
}

interface IUsage {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
}

interface IChoice {
    finish_reason: string;
    index: number;
    message: IMessage;
    logprobs?: ILogProbs;
    text: string;
}