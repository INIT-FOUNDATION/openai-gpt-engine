import { OPENAI_MODELS } from "../config/constants";

export interface IModel {
    id: string;
    created: number;
    object: string;
    owned_by: string;
}

type model = typeof OPENAI_MODELS[number]['modelName'];