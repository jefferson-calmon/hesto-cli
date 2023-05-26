import * as Utils from "./utils";
import * as Helpers from "./helpers";

async function main() {
    const packageContent = await Utils.readFile("package.json");
    const indexContent = await Utils.readFile("src/index.ts");

    const json = JSON.parse(packageContent);
    const version = Helpers.increaseVersion(json.version, "patch");
    json.version = version;

    const startIndex = indexContent.indexOf('.version("') + '.version("'.length;
    const endIndex = indexContent.indexOf('", "-vV")');

    const newIndexContent =
        indexContent.slice(0, startIndex) +
        version +
        indexContent.slice(endIndex);

    await Utils.writeFile("package.json", JSON.stringify(json));
    await Utils.writeFile("src/index.ts", newIndexContent);
}

main();
