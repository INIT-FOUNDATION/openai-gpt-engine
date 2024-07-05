import Joi from "joi";
import { ISpeechRequest, ITranscriptionRequest, ITranslationRequest } from "../types/audio";
import { OPENAI_MODELS } from "../config/constants";
import { audio } from "../enums";

const models = OPENAI_MODELS.map(model => model.modelName);
const validateCreateSpeech = (speechRequest: Partial<ISpeechRequest>): Joi.ValidationResult => {
    const speechSchema = Joi.object({
        model: Joi.string().valid(models).required(),
        input: Joi.string().required(),
        voice: Joi.string().valid(...Object.values(audio.Voice)).required(),
        response_format: Joi.string().valid(...Object.values(audio.ResponseFormat)).optional(),
        speed: Joi.number().optional()
    });
    return speechSchema.validate(speechRequest);
};

const validateCreateTranscriptions = (transcriptionRequest: Partial<ITranscriptionRequest>): Joi.ValidationResult => {
    const transcriptionSchema = Joi.object({
        model: Joi.string().valid(models).required(),
        input: Joi.string().required(),
        voice: Joi.string().valid(...Object.values(audio.Voice)).required(),
        response_format: Joi.string().valid(...Object.values(audio.ResponseFormat)).optional(),
        speed: Joi.number().optional()
    });
    return transcriptionSchema.validate(transcriptionRequest);
};

const validateCreateTranslations = (translationRequest: Partial<ITranslationRequest>): Joi.ValidationResult => {
    const translationSchema = Joi.object({
        file: Joi.object().instance(File).required(),
        model: Joi.string().valid(models).required(),
        prompt: Joi.string().valid(...Object.values(audio.Voice)).optional(),
        response_format: Joi.string().valid(...Object.values(audio.ResponseFormat)).optional(),
        temperature: Joi.number().optional()
    });
    return translationSchema.validate(translationRequest);
};

export {
    validateCreateSpeech,
    validateCreateTranscriptions,
    validateCreateTranslations
}