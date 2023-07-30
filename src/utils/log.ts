import chalk from "chalk";

function logError(message: string, error?: any) {
    console.log("");
    console.error(chalk.red(`✗ ${message}${error ? `: ${error}` : ""}`));
}

function logSuccess(message: string, breakLine = true) {
    if (breakLine) console.log("");
    
    console.log(chalk.green(`✓ ${message}`));
}

export const log = {
    error: logError,
    success: logSuccess,
};
