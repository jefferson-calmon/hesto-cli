import chalk from "chalk";

function logError(message: string, error?: any) {
    console.log("");
    console.error(
        chalk.white(`${chalk.red(`✗`)} ${message}${error ? `: ${error}` : ""}`)
    );
}

function logSuccess(message: string, breakLine = true) {
    if (breakLine) console.log("");

    console.log(chalk.white(`${chalk.green(`✓`)} ${message}`));
}

export const log = {
    error: logError,
    success: logSuccess,
};
