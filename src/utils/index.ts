import fs from "fs";
import natural from "natural";
import chalk from "chalk";
import shell from "shelljs";
import ora from "ora";

import { CONTROLLERS_PATH, messages } from "../constants";
import { CommandStack } from "../types";
import { log } from "./log";

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

export async function execute(command: string) {
    return new Promise<string>((resolve, reject) => {
        shell.exec(
            command,
            { async: true, silent: true },
            (code, stdout, stderr) => {
                if (code !== 0) {
                    reject(
                        new Error(
                            `Failed to execute command: ${command}\n\n${stderr}`
                        )
                    );
                }
                resolve(stdout);
            }
        );
    });
}

export async function executeCommandStack(commands: CommandStack) {
    const commandList = Object.keys(commands);

    for (const command of commandList) {
        const { message, callback } = commands[command];
        const spinner = ora(message).start();

        try {
            await execute(command);
            spinner.succeed();
            if (callback) await callback();
        } catch (error: any) {
            spinner.fail();
            throw new Error(error);
        }
    }
}

export { log } from "./log";
