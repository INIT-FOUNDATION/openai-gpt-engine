import { model } from "./model";

export interface IFinetuningRequest {
    model: model;
    training_file: string;
    hyperparameters?: IHyperparameters;
    suffix?: string;
    validation_file?: string;
    integrations?: IIntegration[];
    seed?: number;
}

interface IFinetuningResponse {
    id: string;
    created_at: number;
    error: ErrorDetails;
    fine_tuned_model: string;
    finished_at: number;
    hyperparameters: IHyperparameters;
    object: string;
    organization_id: string;
    result_files: string[];
    status: status
    trained_tokens: number;
    training_file: string;
    validation_file: string;
    integrations: string[];
    seed: number;
    estimated_finish: number;
}

interface IHyperparameters {
    batch_size?: number;
    learning_rate_multiplier?: number;
    n_epochs?: number;
}


interface IIntegration {
    type: string;
    wand: IWandb;
}

interface IWandb {
    project: string;
    name?: string;
    entity?: string;
    tags?: string[];
}

interface ErrorDetails {
    code: string;
    message: string;
    param: string | null;
}

type status = 'validating_files' | 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled'