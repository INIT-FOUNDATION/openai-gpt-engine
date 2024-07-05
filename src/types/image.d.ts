export interface IImageRequest {
    prompt: string;
    model ?: string | "dall-e-3";
    n ?: number | 1;
    quality ?: string | "standard";
    response_format ?: response_format;
    size ?: size;
    style ?: style;
    user ?: string;
}

export interface IImageResponse {
    b64_json: string;
    url: string;
    revised_format: string;
}

type response_format = "url" | "b64_json";

type size = "256x256" | "512x512" | "1024x1024" | "1794x1024" | "1024x1792";

type style = "vivid" | "natural";