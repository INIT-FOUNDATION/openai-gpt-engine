import { ISpeechRequest, ITranscriptionRequest, ITranscriptionResponse, ITranslationRequest } from "../types/audio";
import { loggerUtils } from "../utils/loggerUtils";
import { audioValidations } from "../validations";
import { axiosUtils } from "../utils";

export const audioService = {
    createSpeech: async (speech: ISpeechRequest): Promise<any> => {
        try {
            loggerUtils.debug(`audioService :: createSpeech :: speech :: ${JSON.stringify(speech)}`);

            const { error } = audioValidations.validateCreateSpeech(speech);
            if (error) {
                if (error.details != null)
                    throw new Error(error.details[0].message);
                else new Error(error.message);
            }

            const response = await axiosUtils.post("/v1/audio/speech", speech);
            return response.data;
        } catch (error) {
            loggerUtils.error(`audioService :: createSpeech :: speech :: ${JSON.stringify(speech)} :: ${error}`);
            throw error;
        }
    },
    createTranscriptions: async (transcription: ITranscriptionRequest): Promise<ITranscriptionResponse> => {
        try {
            loggerUtils.debug(`audioService :: createTranscriptions :: transcription :: ${JSON.stringify(transcription)}`);

            const { error } = audioValidations.validateCreateTranscriptions(transcription);
            if (error) {
                if (error.details != null)
                    throw new Error(error.details[0].message);
                else new Error(error.message);
            }

            const response = await axiosUtils.post("/v1/audio/transcriptions", transcription);
            return response.data;
        } catch (error) {
            loggerUtils.error(`audioService :: createTranscriptions :: speech :: ${JSON.stringify(transcription)} :: ${error}`);
            throw error;
        }
    },
    createTranslations: async (translation: ITranslationRequest): Promise<any> => {
        try {
            loggerUtils.debug(`audioService :: createTranslations :: translation :: ${JSON.stringify(translation)}`);

            const { error } = audioValidations.validateCreateTranslations(translation);
            if (error) {
                if (error.details != null)
                    throw new Error(error.details[0].message);
                else new Error(error.message);
            }

            const response = await axiosUtils.post("/v1/audio/translations", translation);
            return response.data;
        } catch (error) {
            loggerUtils.error(`audioService :: createTranslations :: translation :: ${JSON.stringify(translation)} :: ${error}`);
            throw error;
        }
    }
}   