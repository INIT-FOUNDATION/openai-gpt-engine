import { envUtils } from "../utils";

export const OPENAI_API_KEY = envUtils.requireStringEnvVariable("OPENAI_API_KEY");
export const OPENAI_API_URL = envUtils.getStringEnvVariableOrDefault("OPENAI_API_URL", "https://api.openai.com");
export const OPENAI_API_TIMEOUT = envUtils.getNumberEnvVariableOrDefault("OPENAI_API_TIMEOUT", 10000);

export const OPENAI_MODELS = [
    {
      modelName: "gpt-4-turbo",
      modelDescription: "The latest GPT-4 Turbo model with vision capabilities.",
    },
    {
      modelName: "gpt-4-turbo-2024-04-09",
      modelDescription: "GPT-4 Turbo with Vision model. Vision requests can now use JSON mode and function calling.",
    },
    {
      modelName: "gpt-4-turbo-preview",
      modelDescription: "GPT-4 Turbo preview model. Currently points to gpt-4-0125-preview.",
    },
    {
      modelName: "gpt-4-0125-preview",
      modelDescription: "GPT-4 Turbo preview model intended to reduce cases of “laziness” where the model doesn’t complete a task.",
    },
    {
      modelName: "gpt-4-1106-preview",
      modelDescription: "GPT-4 Turbo preview model featuring improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more.",
    },
    {
      modelName: "gpt-4",
      modelDescription: "Currently points to gpt-4-0613. See continuous model upgrades.",
    },
    {
      modelName: "gpt-4-0613",
      modelDescription: "Snapshot of gpt-4 from June 13th 2023 with improved function calling support.",
    },
    {
      modelName: "gpt-4-0314",
      modelDescription: "Legacy Snapshot of gpt-4 from March 14th 2023.",
    },
    {
      modelName: "gpt-3.5-turbo-0125",
      modelDescription: "The latest GPT-3.5 Turbo model with higher accuracy at responding in requested formats and a fix for a bug which caused a text encoding issue for non-English language function calls.",
    },
    {
      modelName: "gpt-3.5-turbo",
      modelDescription: "Currently points to gpt-3.5-turbo-0125.",
    },
    {
      modelName: "gpt-3.5-turbo-1106",
      modelDescription: "GPT-3.5 Turbo model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more.",
    },
    {
      modelName: "gpt-3.5-turbo-instruct",
      modelDescription: "Similar capabilities as GPT-3 era models. Compatible with legacy Completions endpoint and not Chat Completions.",
    },
    {
      modelName: "dall-e-3",
      modelDescription: "The latest DALL·E model released in Nov 2023.",
    },
    {
      modelName: "dall-e-2",
      modelDescription: "The previous DALL·E model released in Nov 2022. The 2nd iteration of DALL·E with more realistic, accurate, and 4x greater resolution images than the original model.",
    },
    {
      modelName: "tts-1",
      modelDescription: "The latest text to speech model, optimized for speed.",
    },
    {
      modelName: "tts-1-hd",
      modelDescription: "The latest text to speech model, optimized for quality.",
    },
    {
      modelName: "whisper-1",
      modelDescription: "The Whisper v2-large model currently available through our API with the whisper-1 model name.",
    },
    {
      modelName: "text-embedding-3-large",
      modelDescription: "Most capable embedding model for both English and non-English tasks.",
    },
    {
      modelName: "text-embedding-3-small",
      modelDescription: "Increased performance over 2nd generation ada embedding model.",
    },
    {
      modelName: "text-embedding-ada-002",
      modelDescription: "Most capable 2nd generation embedding model, replacing 16 first generation models.",
    },
    {
      modelName: "text-moderation-latest",
      modelDescription: "Currently points to text-moderation-007.",
    },
    {
      modelName: "text-moderation-stable",
      modelDescription: "Currently points to text-moderation-007.",
    },
    {
      modelName: "text-moderation-007",
      modelDescription: "Most capable moderation model across all categories.",
    },
    {
      modelName: "babbage-002",
      modelDescription: "Replacement for the GPT-3 ada and babbage base models.",
    },
    {
      modelName: "davinci-002",
      modelDescription: "Replacement for the GPT-3 curie and davinci base models.",
    },
  ];
  