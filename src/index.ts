#!/usr/bin/env node
import { program } from "commander";

import * as Command from "./commands";

program
    .version("1.0.9")
    .description(
        "A Hesto CLI permite que você agilize suas tarefas de desenvolvimento e automatize processos repetitivos. Com uma série de comandos e recursos, você pode criar projetos, gerenciar dependências, executar tarefas de build e muito mais, tudo com facilidade e eficiência."
    );

program
    .command("create:controller <name>")
    .description("Cria um novo controller")
    .option(
        "-d, --database",
        "Define o banco de dados que será usado (firestore ou rtdb). O padrão é firestore",
        "firestore"
    )
    .action(Command.createController);

program
    .command("create:context <name>")
    .description("Cria um novo contexto")
    .option("-f, --format", "data ou default", "default")
    .action(Command.createContext);

program
    .command("create:model <name>")
    .description("Cria um novo modelo")
    .action(Command.createModel);

program
    .command("update:package")
    .description("Atualiza a versão do package.json")
    .action(Command.updatePackage);

program
    .command("about")
    .description("Exibe informações sobre a Hesto CLI")
    .action(Command.about);

program.parse(process.argv);

if (program.args.length === 0) program.help();
