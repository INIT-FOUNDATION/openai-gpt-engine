import axios, { AxiosInstance } from "axios";
import { OPENAI_API_KEY, OPENAI_API_TIMEOUT, OPENAI_API_URL } from "../config/constants";

const api: AxiosInstance = axios.create({
    timeout: OPENAI_API_TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
    },
});
export interface ApiResponse<T> {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}


api.interceptors.request.use(
    (config) => {
        config.baseURL = OPENAI_API_URL;
        config.headers["Authorization"] = `Bearer ${OPENAI_API_KEY}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const get = async <T>(url: string, config = {}): Promise<ApiResponse<T>> => {
    const response = await api.get<T>(url, config);
    return response;
};

export const post = async <T>(url: string, data ?: any, config = {}): Promise<ApiResponse<T>> => {
    const response = await api.post<T>(url, data, config);
    return response;
};

export const put = async <T>(url: string, data ?: any, config = {}): Promise<ApiResponse<T>> => {
    const response = await api.put<T>(url, data, config);
    return response;
};

export const del = async <T>(url: string, config = {}): Promise<ApiResponse<T>> => {
    const response = await api.delete<T>(url, config);
    return response;
};