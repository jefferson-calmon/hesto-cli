export type ProjectType = "web" | "app" | "api" | "webservice";

export interface CommandStack {
    [command: string]: {
        message: string;
        callback?: () => void | Promise<void>;
    };
}

export interface WriteFileResult {
    success: boolean;
    error: any;
}
