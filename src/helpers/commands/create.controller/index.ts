import * as fs from "fs";

import * as Utils from "../../../utils";
import * as Content from "../../../contents";
import * as Const from "../../../constants";

interface CreateControllerContentProps {
    name: string;
    database: string;
}

export function createControllerContent(props: CreateControllerContentProps) {
    const { database, name } = props;

    const baseDbPath = Utils.pluralize(name.toLowerCase());

    return Content.controller
        .replace(/%name%/g, name)
        .replace(/%database%/g, database)
        .replace(/%baseDbPath%/g, baseDbPath);
}

export function updateControllerIndexFile() {
    const fileNames = getAllControllersFilenames();
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


// Utilities
function getAllControllersFilenames() {
    const excluded = ["BaseController.ts", "index.ts"];

    const fileNames = fs
        .readdirSync(Const.CONTROLLERS_PATH, "utf-8")
        .filter((fileName) => fileName.endsWith(".ts"))
        .filter((fileName) => !excluded.includes(fileName));

    return fileNames;
}

function generateControllerNameFromFileName(fileName: string) {
    return fileName
        .replace(/.ts/g, "")
        .split(/(?=[A-Z])/)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");
}
