import * as fs from "fs";

import * as Content from "../contents";
import * as Utils from "../utils";
import * as Const from "../constants";
import select from "@inquirer/select";
import input from "@inquirer/input";

interface CreateControllerContentProps {
    name: string;
    database: string;
}

interface CreateContextContentProps {
    name: string;
}

interface CreateModelContentProps {
    name: string;
}

type Part = "major" | "minor" | "patch";
type Template = boolean | keyof typeof Const.commitTemplates | undefined;

export function createControllerContent(props: CreateControllerContentProps) {
    const { database, name } = props;

    const baseDbPath = Utils.pluralize(name.toLowerCase());

    return Content.controller
        .replace(/%name%/g, name)
        .replace(/%database%/g, database)
        .replace(/%baseDbPath%/g, baseDbPath);
}

export function createContextContent(props: CreateContextContentProps) {
    const { name } = props;

    return Content.context.replace(/%name%/g, name);
}

export function createModelContent(props: CreateModelContentProps) {
    const { name } = props;

    return Content.model.replace(/%name%/g, name);
}

export function updateControllerIndexFile() {
    const fileNames = Utils.getAllControllersFilenames();
    const path = Const.CONTROLLERS_PATH + "/index.ts";

    const importStatements: string[] = [];
    const objectItems: string[] = [];

    fileNames.forEach((name) => {
        const controllerName = generateControllerNameFromFileName(name);
        const itemName = controllerName.toLowerCase().replace("controller", "");

        const importStatement = `import ${controllerName} from "./${controllerName}";`;
        const objectItem = `    ${itemName}: new ${controllerName}(),`;

        importStatements.push(importStatement);
        objectItems.push(objectItem);
    });

    const content = Content.controllerIndex
        .replace(/%imports%/g, importStatements.join("\n"))
        .replace(/%items%/g, objectItems.join("\n"));

    fs.writeFileSync(path, content);
}

export function increaseVersion(version: string, part: Part) {
    let [major, minor, patch] = version.split(".").map(Number);

    if (part === "major") major++;
    if (part === "minor") minor++;
    if (part === "patch") patch++;

    return [major, minor, patch].join(".");
}

export async function getGitCommitCommand(templateKey: Template) {
    if (templateKey) {
        const key = templateKey as keyof typeof Const.commitTemplates;

        if (Const.commitTemplates[key]) {
            const scope = await getGitCommitScope();
            const command = Const.commitTemplates[key].command;

            return command.replace(/%scope%/g, scope);
        }

        const template = await getGitCommitTemplate();
        const scope = await getGitCommitScope();

        return template.command.replace(/%scope%/g, scope);
    }

    if (!templateKey) {
        const type = await getGitCommitType();
        const scope = await getGitCommitScope();
        const description = await getGitCommitDescription();

        const icon = Const.commitIcons[type as keyof typeof Const.commitTypes];

        const commands = getGitCommands(icon, type, scope, description);
        const command = buildInLineCommand(...commands);

        return command;
    }

    return "";
}

// Utilities
function generateControllerNameFromFileName(fileName: string) {
    return fileName
        .replace(/.ts/g, "")
        .split(/(?=[A-Z])/)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");
}

async function getGitCommitTemplate() {
    const value = await select({
        message: "Selecione o template:",
        choices: Object.values(Const.commitTemplates),
        // pageSize: Object.values(Const.commitTemplates).length,
    });

    return Const.commitTemplates[value as keyof typeof Const.commitTemplates];
}

async function getGitCommitScope() {
    const scope = await input({
        message: "Qual é o escopo do commit (Apenas uma palavra)?",
        validate: (value) => value.split(" ").length === 1,
        transformer: (value) => value.toLowerCase(),
    });

    return scope;
}

async function getGitCommitType() {
    const type = await select({
        message: "Selecione o tipo do commit:",
        choices: Object.values(Const.commitTypes),
        // pageSize: Object.values(Const.commitTypes).length,
    });

    return type;
}

async function getGitCommitDescription() {
    const description = await input({
        message: "Qual é a descrição do commit?",
        validate: (value) => value.length <= 72,
        transformer: (value) => Utils.capitalize(value),
    });

    return description;
}

function getGitCommands(i: string, t: string, s: string, d: string) {
    const [icon, type, scope, description] = [i, t, s, d];

    const commands = [
        "git add .",
        `git commit -m "${icon} ${type}(${scope}): ${description}"`,
        "git push",
    ];

    return commands;
}

async function buildInLineCommand(...commands: string[]) {
    return commands.join(" && ");
}
