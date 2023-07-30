import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";

export function displayAboutText() {
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
