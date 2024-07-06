import { loggerUtils } from "../utils/loggerUtils";
import { embeddingValidations } from "../validations";
import { axiosUtils } from "../utils";
import { IEmbeddingsRequest, IEmbeddingsResponse } from "../types/embeddings";

export const embeddingService = {
    createEmbeddings: async (embedding: IEmbeddingsRequest): Promise<IEmbeddingsResponse> => {
        try {
            loggerUtils.debug(`embeddingService :: createEmbeddings :: embedding :: ${JSON.stringify(embedding)}`);

            const { error } = embeddingValidations.validateCreateEmbeddings(embedding);
            if (error) {
                if (error.details != null)
                    throw new Error(error.details[0].message);
                else new Error(error.message);
            }

            const response = await axiosUtils.post("v1/embeddings", embedding);
            loggerUtils.debug(`embeddingService :: createEmbeddings :: response :: ${JSON.stringify(response)}`);
            return response.data;
        } catch (error) {
            loggerUtils.error(`embeddingService :: createEmbeddings :: embedding :: ${JSON.stringify(embedding)} :: ${error}`);
            throw error;
        }
    },
}