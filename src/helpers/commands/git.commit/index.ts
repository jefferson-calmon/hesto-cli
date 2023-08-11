import select from "@inquirer/select";
import input from "@inquirer/input";

import * as Const from "../../../constants";
import * as Utils from "../../../utils";

type Template = boolean | keyof typeof Const.commitTemplates | undefined;

interface CreateGitCommitCommandProps {
    template: string;
    branch: string | undefined;
}

export async function createGitCommitCommand(
    props: CreateGitCommitCommandProps
) {
    if (props.template) {
        const key = props.template as keyof typeof Const.commitTemplates;

        if (Const.commitTemplates[key]) {
            const scope = await getGitCommitScope();
            const command = Const.commitTemplates[key].command;

            return command.replace(/%scope%/g, scope);
        }

        const templateData = await getGitCommitTemplate();
        const scope = await getGitCommitScope();

        return templateData.command.replace(/%scope%/g, scope);
    }

    const type = await getGitCommitType();
    const scope = await getGitCommitScope();
    const description = await getGitCommitDescription();
    const branch = props.branch || (await getCurrentBranch());

    const icon = Const.commitIcons[type as keyof typeof Const.commitTypes];

    const commands = [
        "git add .",
        `git commit -m "${icon} ${type}(${scope}): ${description}"`,
        `git push -u origin ${branch}`,
    ];

    const command = Utils.buildInLineCommand(...commands);

    return command;
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

async function getCurrentBranch() {
    return await Utils.execute("git rev-parse --abbrev-ref HEAD").then(
        (result) => result.replace("\n", "")
    );
}
