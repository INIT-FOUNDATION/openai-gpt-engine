import { model } from "./model";

export interface IModerationRequest {
    input: string;
    model: model;
}

export interface IModerationResponse {
    id: string;
    model: string;
    results: IResult[];
    category_scores: ICategoryScores;
}

interface IResult {
    flagged: boolean;
    categories: ICategories
}

interface ICategories {
    hate: boolean;
    "hate/threatening": boolean;
    harassment: boolean;
    "harassment/threatening": boolean;
    "self-harm": boolean;
    "self-harm/intent": boolean;
    "self-harm/instructions": boolean;
    sexual: boolean;
    "sexual/minors": boolean;
    violence: boolean;
    "violence/graphic": boolean;
}

interface ICategoryScores {
    hate: number;
    "hate/threatening": number;
    harassment: number;
    "harassment/threatening": number;
    "self-harm": number;
    "self-harm/intent": number;
    "self-harm/instructions": number;
    sexual: number;
    "sexual/minors": number;
    violence: number;
    "violence/graphic": number;
}