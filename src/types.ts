export interface Manifest {
    version: string;
    type: "applicationCommand";
    data: Data;
}

interface Data {
    commands?: Command[];
}

interface Command {
    name: string;
    description: string;
    options?: CommandOption[];
}

interface CommandOption {
    type: "String" | "Integer";
    name: string;
    description: string;
    required?: boolean;
}