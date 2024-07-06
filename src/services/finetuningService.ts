import { finetuningValidations } from "../validations";
import { IFinetuningResponse, IFinetuningRequest } from "../types/finetuning";
import { axiosUtils, loggerUtils } from "../utils";

export const finetuningService = {
    createFineTunningJob: async (finetuningJobRequest: IFinetuningRequest): Promise<IFinetuningResponse> => {
        try {
            loggerUtils.debug(`finetuningService :: createFineTunningJob :: finetuningJobRequest :: ${JSON.stringify(finetuningJobRequest)}`);
            const { error } = finetuningValidations.validateCreateFineTuningJob(finetuningJobRequest);
            if (error) {
                if (error.details != null)
                    throw new Error(error.details[0].message);
                else new Error(error.message);
            }

            const response = await axiosUtils.post("/v1/fine_tuning/jobs", finetuningJobRequest);
            loggerUtils.debug(`finetuningService :: createFineTunningJob :: response :: ${JSON.stringify(response)}`);
            return response.data;
        } catch (error) {
            loggerUtils.error(`finetuningService :: createFineTunningJob :: finetuningJobRequest :: ${JSON.stringify(finetuningJobRequest)} :: ${error}`);
            throw error;
        }
    },
    listFineTuningJobs: async (finetuningJobRequest: {
        after ?: string,
        limit ?: number
    }): Promise<any> => {
        try {
            loggerUtils.debug(`finetuningService :: listFineTuningJobs :: finetuningJobRequest :: ${JSON.stringify(finetuningJobRequest)}`);
            const { error } = finetuningValidations.validateListFineTuningJobs(finetuningJobRequest);
            if (error) {
                if (error.details != null)
                    throw new Error(error.details[0].message);
                else new Error(error.message);
            }
            let requestUrl = "/v1/fine_tuning/jobs";
            if (finetuningJobRequest.after) {
                requestUrl += `?after=${finetuningJobRequest.after}`;
            }
            if (finetuningJobRequest.limit) {
                requestUrl += `&limit=${finetuningJobRequest.limit}`;
            }

            const response = await axiosUtils.get(requestUrl);
            loggerUtils.debug(`finetuningService :: listFineTuningJobs :: response :: ${JSON.stringify(response)}`);
            return response.data;
        } catch (error) {
            loggerUtils.error(`finetuningService :: listFineTuningJobs :: finetuningJobRequest :: ${JSON.stringify(finetuningJobRequest)} :: ${error}`);
            throw error;
        }
    },
    listFineTuningEvents: async (finetuningEventRequest: {
        fine_tuning_job_id: string,
    }): Promise<any> => {
        try {
            loggerUtils.debug(`finetuningService :: listFineTuningEvents :: finetuningEventRequest :: ${JSON.stringify(finetuningEventRequest)}`);
            const { error } = finetuningValidations.validateListFineTuningEvents(finetuningEventRequest);
            if (error) {
                if (error.details != null)
                    throw new Error(error.details[0].message);
                else new Error(error.message);
            }

            const response = await axiosUtils.get(`/v1/fine_tuning/jobs/${finetuningEventRequest.fine_tuning_job_id}/events`);
            loggerUtils.debug(`finetuningService :: listFineTuningEvents :: response :: ${JSON.stringify(response)}`);
            return response.data;
        } catch (error) {
            loggerUtils.error(`finetuningService :: listFineTuningEvents :: finetuningEventRequest :: ${JSON.stringify(finetuningEventRequest)} :: ${error}`);
            throw error;
        }
    },
    listFineTuningCheckpoints: async (finetuningCheckpointRequest: {
        fine_tuning_job_id: string,
    }): Promise<any> => {
        try {
            loggerUtils.debug(`finetuningService :: listFineTuningCheckpoints :: finetuningCheckpointRequest :: ${JSON.stringify(finetuningCheckpointRequest)}`);
            const { error } = finetuningValidations.validateListFineTuningCheckpoints(finetuningCheckpointRequest);
            if (error) {
                if (error.details != null)
                    throw new Error(error.details[0].message);
                else new Error(error.message);
            }

            const response = await axiosUtils.get(`/v1/fine_tuning/jobs/${finetuningCheckpointRequest.fine_tuning_job_id}/checkpoints`);
            loggerUtils.debug(`finetuningService :: listFineTuningCheckpoints :: response :: ${JSON.stringify(response)}`);
            return response.data;
        } catch (error) {
            loggerUtils.error(`finetuningService :: listFineTuningCheckpoints :: finetuningCheckpointRequest :: ${JSON.stringify(finetuningCheckpointRequest)} :: ${error}`);
            throw error;
        }
    }
}