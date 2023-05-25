import fs from "fs";
import natural from "natural";
import { CONTROLLERS_PATH } from "../constants";

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

export async function writeFile(path: string, content: string) {
    return new Promise<WriteFileResult>((resolve, reject) => {
        fs.writeFile(path, content, (err) => {
            if (err) resolve({ success: false, error: err });

            resolve({ success: true, error: null });
        });
    });
}

export { log } from "./log";
