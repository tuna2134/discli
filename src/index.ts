import { program } from "commander";
import YAML from "yaml";
import { promises as fs } from "node:fs";
import { Manifest } from "./types";
import { Routes } from "discord-api-types/v10";
import { REST } from '@discordjs/rest';

async function main() {
    program
        .version("0.0.1")
        .option("-i", "Input file", "commands.yaml");
    program.parse();
    const options = program.opts();
    const manifest: Manifest = YAML.parse(await fs.readFile(options.i, "utf-8"));
    const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN as string);
    const application = await rest.get(Routes.currentApplication());
    switch (manifest.type) {
        case "applicationCommand": {
            const commands = manifest.data.commands;
            if (commands) {
                commands.forEach(async (command) => {
                    const route = Routes.applicationCommands(applicati
                });
            }
        }
    }
};

main();