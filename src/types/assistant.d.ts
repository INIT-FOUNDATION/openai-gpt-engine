export interface IAssistantRequest {
    model: model;
    name ?: string;
    description ?: string;
    instructions ?: string;
    tools: ICodeInterpreterTool[] | IFileSearchTool[] | IFunctionTool[];
    tool_resources ?: IToolResources;
    metadata ?: any;
    temperature ?: number;
    top_p ?: number;
    response_format ?: string;
}

export interface IAssistantResponse {
    id: string;
    object: string;
    created_at: number;
    name ?: string;
    description ?: string;
    model ?: string;
    instructions ?: string;
    tools: ICodeInterpreterTool[] | IFileSearchTool[] | IFunctionTool[];
    tool_resources ?: IToolResources;
    metadata: string;
    temperature ?: number;
    top_p ?: number;
    response_format ?: string;
}

interface IToolResources {
    code_interpreter: ICodeInterpreter;
    file_search: IFileSearchVector;
}

interface ICodeInterpreter {
    file_ids ?: string[];
}

interface IFileSearchVector {
    vector_store_ids ?: string[];
    vector_stores ?: IVectorStores[];
}

interface IVectorStores {
    file_ids: string[];
    chunking_strategy: any;
}

interface ICodeInterpreterTool {
    type: string;
}

interface IFileSearchTool {
    type: string;
    file_search ?: IFileSearch;
}

interface IFunctionTool {
    type: string;
    function: IFunction;
}

interface IFunction {
    description ?: string;
    name: string;
    parameters: string;
}

interface IFileSearch {
    max_num_results ?: number;
}

interface IMessage {
    role: role;
    content: string;
}

interface ILogProbs {
    text_offset: any;
    token_logprobs: any;
    tokens: any;
    top_logprobs: any;
}

interface IUsage {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
}

interface IChoice {
    finish_reason: string;
    index: number;
    message: IMessage;
    logprobs?: ILogProbs;
    text: string;
}