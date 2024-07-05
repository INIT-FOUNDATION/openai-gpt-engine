import Joi from "joi";
import { OPENAI_MODELS } from "../config/constants";
import { embeddings } from "../enums";
import { IEmbeddingsRequest } from "../types/embeddings";

const models = OPENAI_MODELS.map(model => model.modelName);
const validateCreateEmbeddings = (embeddingRequest: Partial<IEmbeddingsRequest>): Joi.ValidationResult => {
    const embeddingsSchema = Joi.object({
        input: Joi.string().required(),
        model: Joi.string().valid(models).required(),
        encoding_format: Joi.string().valid(...Object.values(embeddings.EncodingFormat)).optional(),
        dimensions: Joi.number().optional(),
        user: Joi.string().optional()
      });
    return embeddingsSchema.validate(embeddingRequest);
};

export {
    validateCreateEmbeddings,
}