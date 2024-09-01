import path from "path";
import { ClubModel } from "../models/club-model";
import fs from "fs/promises";

const pathData = path.join(
	__dirname,
	process.env.PATH_DATA || "../data/clubs.json"
);

export const findAllClubs = async (): Promise<ClubModel[]> => {
	const data = await fs.readFile(pathData, "utf-8");
	return JSON.parse(data);
};
