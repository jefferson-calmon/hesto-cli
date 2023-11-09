#!/usr/bin/env node
import { program } from "commander";

import * as Command from "./commands";

program
    .version("1.1.4", "-vV")
    .description(
        "A Hesto CLI permite que você agilize suas tarefas de desenvolvimento e automatize processos repetitivos. Com uma série de comandos e recursos, você pode criar projetos, gerenciar dependências, executar tarefas de build e muito mais, tudo com facilidade e eficiência."
    );

program
    .command("start <type> <name>")
    .description("Inicia um novo projeto na rota atual")
    .action(Command.start);

program
    .command("create:controller <name>")
    .description("Cria um novo controller")
    .option(
        "-d, --database",
        "Define o banco de dados que será usado (firestore | rtdb). O padrão é firestore",
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
    .option("--zod", "Usar a estrutura e sintaxe do zod")
    .action(Command.createModel);

program
    .command("create:component <name>")
    .description("Cria um novo component")
    .action(Command.createComponent);

program
    .command("create:env <name> [value]")
    .description("Cria uma variável de ambiente")
    .option(
        "-t, --type",
        "Define qual o tipo da variável de ambiente. (public | 'private)",
        "public"
    )
    .action(Command.createEnv);

program
    .command("update:package")
    .description("Atualiza a versão do package.json")
    .option(
        "-p, --part <type>",
        "Define a parte da versão que será atualizada (major, minor, patch). O padrão é patch",
        "patch"
    )
    .action(Command.updatePackage);

program
    .command("git:commit")
    .description("Cria um novo commit")
    .alias("gc")
    .option(
        "-t, --template [type]",
        "Define qual template será usado. Use `git:templates list` para ver os templates existentes"
    )
    .option(
        "-nE, --no-execute",
        "Apenas exibe o comando montado, mas executa nada."
    )
    .option(
        "-b, --branch <branch>",
        "Define para qual branch o commit será enviado"
    )
    .action(Command.gitCommit);

program
    .command("git:templates <command>")
    .description("Cria e lista templates")
    .action(Command.gitTemplate);

program
    .command("about")
    .description("Exibe informações sobre a Hesto CLI")
    .action(Command.about);

program.parse(process.argv);

if (program.args.length === 0) program.help();
