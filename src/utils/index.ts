import fs from "fs";
import natural from "natural";
import chalk from "chalk";

import { CONTROLLERS_PATH, messages } from "../constants";

interface WriteFileResult {
    success: boolean;
    error: any;
}

export function pluralize(value: string) {
    const nounInflector = new natural.NounInflector();

    return nounInflector.pluralize(value);
}

export function capitalize(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export function createFolderIfNotExists(folderPath: string) {
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
}

export function getAllControllersFilenames() {
    const excluded = ["BaseController.ts", "index.ts"];

    const fileNames = fs
        .readdirSync(CONTROLLERS_PATH, "utf-8")
        .filter((fileName) => fileName.endsWith(".ts"))
        .filter((fileName) => !excluded.includes(fileName));

    return fileNames;
}

export function getMessages(id: keyof typeof messages, ...vars: string[]) {
    const message = messages[id];

    const success = message.success
        .replace(/%var1%/, chalk.bold(vars[0]))
        .replace(/%var2%/, chalk.bold(vars[1]));

    const error = message.success
        .replace(/%var1%/, chalk.bold(vars[0]))
        .replace(/%var2%/, chalk.bold(vars[1]));

    return {
        success,
        error,
    };
}

export async function writeFile(path: string, content: string) {
    return new Promise<WriteFileResult>((resolve, reject) => {
        fs.writeFile(path, content, (err) => {
            if (err) return resolve({ success: false, error: err });

            resolve({ success: true, error: null });
        });
    });
}

export async function readFile(path: string) {
    return new Promise<string>((resolve, reject) => {
        fs.readFile(path, "utf8", (err, data) => {
            if (err) return reject(err);

            resolve(data);
        });
    });
}

export { log } from "./log";
