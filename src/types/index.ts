export interface CommandStack {
    [command: string]: {
        message: string;
        callback?: () => void | Promise<void>;
    };
}
