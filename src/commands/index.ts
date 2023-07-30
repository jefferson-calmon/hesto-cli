import { execSync } from "child_process";

import * as Helpers from "../helpers";
import * as Utils from "../utils";
import * as Const from "../constants";
import { CommandStack, ProjectType } from "../types";

type Args = any[];

const log = Utils.log;

export async function about(...args: Args) {
    return Helpers.displayAboutText();
}

export async function start(...args: Args) {
    const [type, name] = args as [ProjectType, string, ...unknown[]];

    if (!["web", "app", "api", "webservice"].includes(type)) {
        return log.error(
            "Tipo de projeto inválido. O tipo de projeto precisa ser um desses: web, app, api or webservice."
        );
    }

    const slug = `${type}.${name}`.toLowerCase();

    const isWin = process.platform === "win32";
    const script = `run.${isWin ? "bat" : "sh"}`;
    const port = Math.floor(1000 + Math.random() * 9000);

    const repositories: Record<ProjectType, string> = {
        web: "https://github.com/jefferson-calmon/nextjs-starter",
        app: "https://github.com/jefferson-calmon/nextjs-starter",
        api: "https://github.com/jefferson-calmon/nextjs-starter",
        webservice: "https://github.com/jefferson-calmon/nextjs-starter",
    };

    const repository = repositories[type];

    const cloneRepository = `git clone ${repository} ${slug}`;
    const installDependencies = `cd ./${slug} && mkdir logs && yarn install > ./logs/yarn-install.log`;
    const createInitScript = `cd ./${slug} && echo yarn next dev --port ${port} >> ${script}`;
    const init = `cd ./${slug} && code .`;

    const commandStack: CommandStack = {
        [cloneRepository]: {
            message: "Clonando repositório de base",
        },
        [installDependencies]: {
            message: "Instalando dependências",
        },
        [createInitScript]: {
            message: "Preparando inicialização personalizada",
            callback: async () => {
                const content = await Utils.readFile(`./${slug}/package.json`);
                const json = JSON.parse(content);

                json.scripts.dev = `${script}`;

                await Utils.writeFile(
                    `./${slug}/package.json`,
                    JSON.stringify(json)
                );
            },
        },
        [init]: {
            message: "Abrindo o projeto",
        },
    };

    console.log("");
    await Utils.executeCommandStack(commandStack);
    console.log("");

    execSync(`cd ./${slug} && yarn dev`);
}

export async function createController(...args: Args) {
    const [name, options] = args;

    const fileContent = Helpers.createControllerContent({
        name: Utils.capitalize(name),
        database: options.database,
    });

    const fileName = `${Utils.capitalize(name)}Controller`;
    const filePath = `${Const.CONTROLLERS_PATH}/${fileName}.ts`;

    Utils.createFolderIfNotExists(Const.CONTROLLERS_PATH);

    const result = await Utils.writeFile(filePath, fileContent);
    const messages = Utils.getMessages("controllerCreation", fileName);

    if (!result.success) return log.error(messages.error, result.error);

    Helpers.updateControllerIndexFile();

    await Utils.execute(`code ${filePath}`);

    log.success(messages.success);
}

export async function createContext(...args: Args) {
    const [name] = args;

    const fileContent = Helpers.createContextContent({
        name: Utils.capitalize(name),
    });

    const fileName = `${Utils.capitalize(name)}Context`;
    const filePath = `${Const.CONTEXTS_PATH}/${fileName}.tsx`;

    Utils.createFolderIfNotExists(Const.CONTEXTS_PATH);

    const result = await Utils.writeFile(filePath, fileContent);
    const messages = Utils.getMessages("modelCreation", fileName);

    if (!result.success) return log.error(messages.error, result.error);

    log.success(messages.success);

    await Utils.execute(`code ${filePath}`);
}

export async function createModel(...args: Args) {
    const [name, options] = args;

    const useZod = options.zod;

    const fileContent = Helpers.createModelContent({
        name: Utils.capitalize(name),
        useZod,
    });

    const fileName = `${Utils.capitalize(name)}`;
    const filePath = `${Const.MODELS_PATH}/${fileName}.ts`;

    Utils.createFolderIfNotExists(Const.MODELS_PATH);

    const result = await Utils.writeFile(filePath, fileContent);
    const messages = Utils.getMessages("modelCreation", fileName);

    if (!result.success) return log.error(messages.error, result.error);

    log.success(messages.success);

    Utils.execute(`code ${filePath}`);
}

export async function createComponent(...args: Args) {
    const name = Utils.capitalize(args[0]).replace(" ", "");

    const { index, styles } = Helpers.createComponentContent({
        name,
    });

    const indexFilePath = `${Const.COMPONENTS_PATH}/${name}/index.tsx`;
    const stylesFilePath = `${Const.COMPONENTS_PATH}/${name}/styles.ts`;

    Utils.createFolderIfNotExists(Const.COMPONENTS_PATH);
    Utils.createFolderIfNotExists(`${Const.COMPONENTS_PATH}/${name}`);

    await Utils.writeFile(indexFilePath, index);
    await Utils.writeFile(stylesFilePath, styles);

    const messages = Utils.getMessages("componentCreation", name);

    log.success(messages.success);

    Utils.execute(`code ${indexFilePath}`);
}

export async function updatePackage(...args: Args) {
    const [options] = args;

    try {
        const content = await Utils.readFile("package.json");

        const json = JSON.parse(content);
        const version = Helpers.updateVersion(json.version, options.part);
        const versions = [json.version, version];

        json.version = version;

        await Utils.writeFile("package.json", JSON.stringify(json));

        const messages = Utils.getMessages("packageUpdating", ...versions);
        log.success(messages.success);
    } catch (error) {
        const messages = Utils.getMessages("packageUpdating");
        log.error(messages.error, error);
    }
}

export async function gitCommit(...args: Args) {
    const [options] = args;

    const template = options.template;

    const command = await Helpers.createGitCommitCommand(template);

    if (options.execute) {
        console.log("");
        await Utils.execute(command).then(console.log);
    }

    log.success(command, false);
}

export async function gitTemplate(...args: Args) {
    const [command] = args;

    if (command === "list") return Helpers.listGitTemplates();
}
