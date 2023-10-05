import * as fs from "fs";

import * as Utils from "../../../utils";
import * as Content from "../../../contents";

export async function updateDotEnvFile(path: string, data: string) {
    let fileContent = await Utils.readFile(path);

    fileContent = fileContent.trim() + `\n${data}`;

    await Utils.writeFile(path, fileContent);
}

export async function updateConstantEnvFile(fileFullPath: string) {
    const vars = await getAllVars();
    const path = fileFullPath;

    const objectItems: string[] = [];

    vars.forEach((envVar) => {
        const envName = envVar.split("=")[0];
        const propName = envName
            .replace("NEXT", "")
            .replace("NEXT_PUBLIC_", "")
            .replace("NEXT_PRIVATE_", "")
            .split("_")
            .map((part) => part.toLowerCase())
            .map(Utils.capitalize)
            .join("");

        const objectItem = `    ${propName}: process.env.${envName},`;

        if (objectItems.find((i) => i === objectItem)) return;

        objectItems.push(objectItem);
    });

    const content = Content.constantEnvFile.replace(
        /%items%/g,
        objectItems.join("\n")
    );

    await Utils.writeFile(path, content);
}

// Utilities
async function getAllVars() {
    const excluded: string[] = [];

    const fileNames = fs
        .readdirSync("./", "utf-8")
        .filter((fileName) => fileName.endsWith(".env.local"))
        .filter((fileName) => !excluded.includes(fileName));

    const fileContents = await Promise.all(
        fileNames.map((fileName) => Utils.readFile(fileName))
    );

    const vars = fileContents
        .map((fileContent) => fileContent.split("\r\n"))
        .flat()
        .map((envVars) => envVars.split("\n"))
        .flat()
        .filter(Boolean)
        .map((envVar) => envVar.trim());

    return vars;
}
