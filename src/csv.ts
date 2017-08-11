import * as fs from "fs";
import * as fse from "fs-extra";

export interface UserData {
    name: string;
    email: string;
    competedBefore: boolean;
    onDiscord: boolean;
    shirtSize: string;
    pizzaChoice: string;
    pizzaOther?: string;
    isAcmMember: string;
}

const CSV_PATH: string = "data.csv";

const COLUMNS: string[] = [
    "Name", "E-Mail", "Competed Before", "On Discord", "Shirt Size", "Pizza Choice", "Pizza Other", "Is ACM Member"
]

export async function fileExists(path: string): Promise<boolean> {
    try { await fse.access(path); }
    catch(e) { return false; }
    return true;
}

export async function initialize(): Promise<void> {
    const exists = await fileExists(CSV_PATH);
    if(!exists) {
        const header: string = COLUMNS.join(",") + "\n";
        await fse.writeFile(CSV_PATH, header);
    }
}

export async function writeRow(data: UserData): Promise<void> {
    const row: string = [
        data.name,
        data.email,
        data.competedBefore,
        data.onDiscord,
        data.shirtSize,
        data.pizzaChoice,
        data.pizzaOther || "",
        data.isAcmMember
    ].map(elem => JSON.stringify(elem))
        .join(",") + "\n";

    await fse.appendFile(CSV_PATH, row);
}
