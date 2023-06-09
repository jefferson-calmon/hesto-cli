import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import { execSync } from "child_process";

import * as Helpers from "../helpers";
import * as Utils from "../utils";
import * as Const from "../constants";

type Args = any[];

const log = Utils.log;

export async function about(...args: Args) {
    clear();

    console.log(
        chalk.bold(
            figlet.textSync("Hesto CLI", {
                horizontalLayout: "default",
            })
        )
    );

    console.log(
        chalk.bold(
            "\n\nA Hesto CLI foi inspirada em Hefesto, o artesão divino da mitologia grega. Hefesto era conhecido por sua habilidade em forjar armas poderosas e belas obras de arte. Da mesma forma, a Hefesto CLI visa fornecer uma ferramenta poderosa e útil para desenvolvedores e criadores.\n"
        )
    );

    console.log(
        chalk.bold(
            "A Hesto CLI permite que você agilize suas tarefas de desenvolvimento e automatize processos repetitivos. Com uma série de comandos e recursos, você pode criar projetos, gerenciar dependências, executar tarefas de build e muito mais, tudo com facilidade e eficiência.\n"
        )
    );

    console.log(
        chalk.bold(
            "Assim como Hefesto moldava o metal com maestria, a Hesto CLI é projetada para ajudá-lo a moldar seu código com precisão e elegância. Aproveite o poder da Hesto CLI para impulsionar sua produtividade e alcançar resultados impressionantes.\n"
        )
    );

    console.log(
        chalk.bold(
            "Que a Hesto CLI seja sua ferramenta de confiança na forja do desenvolvimento!\n\n"
        )
    );

    console.log(
        "                                                 Criado por Jefferson Calmon - github.com/jefferson-calmon"
    );

    console.log("\n\n");
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
    const messages = Utils.getMessages("modelCreation", fileName);

    if (!result.success) return log.error(messages.error, result.error);

    log.success(messages.success);

    execSync(`code ${filePath}`);

    Helpers.updateControllerIndexFile();
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

    execSync(`code ${filePath}`);
}

export async function createModel(...args: Args) {
    const [name] = args;

    const fileContent = Helpers.createModelContent({
        name: Utils.capitalize(name),
    });

    const fileName = `${Utils.capitalize(name)}`;
    const filePath = `${Const.MODELS_PATH}/${fileName}.ts`;

    Utils.createFolderIfNotExists(Const.MODELS_PATH);

    const result = await Utils.writeFile(filePath, fileContent);
    const messages = Utils.getMessages("modelCreation", fileName);

    if (!result.success) return log.error(messages.error, result.error);

    log.success(messages.success);

    execSync(`code ${filePath}`);
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

    execSync(`code ${indexFilePath}`);
}

export async function updatePackage(...args: Args) {
    const [options] = args;

    try {
        const content = await Utils.readFile("package.json");

        const json = JSON.parse(content);
        const version = Helpers.increaseVersion(json.version, options.part);
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

    const command = await Helpers.getGitCommitCommand(template);
    console.log("\n");

    const result = execSync(command);

    console.log(result.toString());

    log.success(command, false);
}

export async function gitTemplate(...args: Args) {
    const [command] = args;

    if (command === "list") return Helpers.displayGitCommitTemplatesList();
}
