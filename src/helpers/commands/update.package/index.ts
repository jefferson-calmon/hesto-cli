type Part = "major" | "minor" | "patch";

export function updateVersion(version: string, part: Part) {
    let [major, minor, patch] = version.split(".").map(Number);

    if (part === "major") major++;
    if (part === "minor") minor++;
    if (part === "patch") patch++;

    return [major, minor, patch].join(".");
}
