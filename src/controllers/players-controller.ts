import { Request, Response } from "express";
import * as PlayerService from "../services/players-service";

export const getPlayer = async (req: Request, res: Response) => {
	const httpResponse = await PlayerService.getPlayerService();
	res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
	const httpResponse = await PlayerService.getPlayerByIdService(req);
	res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
	const httpResponse = await PlayerService.createPlayerService(req);
	res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const patchPlayer = async (req: Request, res: Response) => {
	const httpResponse = await PlayerService.updatePlayerService(req);
	res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deletePlayer = async (req: Request, res: Response) => {
	const httpResponse = await PlayerService.deletePlayerService(req);
	res.status(httpResponse.statusCode).json(httpResponse.body);
};
