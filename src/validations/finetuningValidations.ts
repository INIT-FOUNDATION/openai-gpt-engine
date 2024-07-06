import Joi from "joi";
import { OPENAI_MODELS } from "../config/constants";
import { IFinetuningRequest } from "../types/finetuning";

const models = OPENAI_MODELS.map(model => model.modelName);

const hyperparametersSchema = Joi.object({
    batch_size: Joi.number().optional(),
    learning_rate_multiplier: Joi.number().optional(),
    n_epochs: Joi.number().optional()
});

const wandbSchema = Joi.object({
    project: Joi.string().required(),
    name: Joi.string().optional(),
    entity: Joi.string().optional(),
    tags: Joi.array().items(Joi.string()).optional()
});

const integrationSchema = Joi.object({
    type: Joi.string().required(),
    wand: wandbSchema.required()
});




const validateCreateFineTuningJob = (finetuningJobRequest: Partial<IFinetuningRequest>): Joi.ValidationResult => {
    const finetuningJobRequestSchema = Joi.object({
        model: Joi.string().valid(models).required(),
        training_file: Joi.string().required(),
        hyperparameters: hyperparametersSchema.optional(),
        suffix: Joi.string().optional(),
        validation_file: Joi.string().optional(),
        integrations: Joi.array().items(integrationSchema).optional(),
        seed: Joi.number().optional()
    });
    return finetuningJobRequestSchema.validate(finetuningJobRequest);
};

const validateListFineTuningJobs = (finetuningJobRequest: {
    after ?: string;
    limit ?: number
}): Joi.ValidationResult => {
    const finetuningJobRequestSchema = Joi.object({
        after: Joi.string().optional(),
        limit: Joi.number().default(20)
    });
    return finetuningJobRequestSchema.validate(finetuningJobRequest);
};

const validateListFineTuningEvents = (finetuningEventsRequest: {
    fine_tuning_job_id: string
}): Joi.ValidationResult => {
    const finetuningEventsRequestSchema = Joi.object({
        fine_tuning_job_id: Joi.string().required()
    });
    return finetuningEventsRequestSchema.validate(finetuningEventsRequest);
};

const validateListFineTuningCheckpoints = (finetuningCheckpointsRequest: {
    fine_tuning_job_id: string
}): Joi.ValidationResult => {
    const finetuningCheckpointsRequestSchema = Joi.object({
        fine_tuning_job_id: Joi.string().required()
    });
    return finetuningCheckpointsRequestSchema.validate(finetuningCheckpointsRequest);
};

const validateRetrieveFineTuningJob = (finetuningJobRequest: {
    fine_tuning_job_id: string
}): Joi.ValidationResult => {
    const finetuningJobRequestSchema = Joi.object({
        fine_tuning_job_id: Joi.string().required()
    });
    return finetuningJobRequestSchema.validate(finetuningJobRequest);
};

const validateCancelFineTuningJob = (finetuningJobRequest: {
    fine_tuning_job_id: string
}): Joi.ValidationResult => {
    const finetuningJobRequestSchema = Joi.object({
        fine_tuning_job_id: Joi.string().required()
    });
    return finetuningJobRequestSchema.validate(finetuningJobRequest);
};

export {
    validateCreateFineTuningJob,
    validateListFineTuningJobs,
    validateListFineTuningEvents,
    validateListFineTuningCheckpoints,
    validateRetrieveFineTuningJob,
    validateCancelFineTuningJob,
}