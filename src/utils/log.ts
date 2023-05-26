import chalk from "chalk";

function logError(message: string, error?: any) {
    console.log("\n");
    console.error(chalk.red(`✗ ${message}${error ? `: ${error}` : ""}`));
}

function logSuccess(message: string, breakLine = true) {
    if (breakLine) console.log("\n");
    
    console.log(chalk.green(`✓ ${message}`));
}

export const log = {
    error: logError,
    success: logSuccess,
};
