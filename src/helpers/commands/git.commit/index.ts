import select from "@inquirer/select";
import input from "@inquirer/input";

import * as Const from "../../../constants";
import * as Utils from "../../../utils";

type Template = boolean | keyof typeof Const.commitTemplates | undefined;

export async function createGitCommitCommand(templateKey: Template) {
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

        const commands = getGitCommitCommands(icon, type, scope, description);
        const command = Utils.buildInLineCommand(...commands);

        return command;
    }

    return "";
}

// Utilities

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

function getGitCommitCommands(i: string, t: string, s: string, d: string) {
    const [icon, type, scope, description] = [i, t, s, d];

    const commands = [
        "git add .",
        `git commit -m "${icon} ${type}(${scope}): ${description}"`,
        "git push -u origin main",
    ];

    return commands;
}
