import * as Utils from "./utils";
import * as Helpers from "./helpers";

async function main() {
    const packageContent = await Utils.readFile("package.json");
    const indexContent = await Utils.readFile("src/index.ts");

    const json = JSON.parse(packageContent);
    const version = Helpers.increaseVersion(json.version);
    json.version = version;

    const index = indexContent.indexOf('.version("') + '.version("'.length;
    const newIndexContent =
        indexContent.slice(0, index) +
        version +
        indexContent.slice(index + version.length);

    await Utils.writeFile("package.json", JSON.stringify(json));
    await Utils.writeFile("src/index.ts", newIndexContent);
}

main();
