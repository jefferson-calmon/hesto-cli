import Table from "cli-table";

import * as Const from "../../../constants";

export async function listGitTemplates() {
    const table = new Table({
        head: ["Nome", "Descrição"],
        colAligns: ["left", "left"],
    });

    Object.values(Const.commitTemplates)
        .map((template) => [template.name, template.description])
        .map((row) => table.push(row));

    console.log(table.toString());
}
