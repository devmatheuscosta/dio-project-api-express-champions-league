import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";
import { Request, Response } from "express";

export const getPlayerService = async () => {
	const data = await PlayerRepository.findAllPlayers();
	let response = null;

	if (data) {
		response = await httpResponse.ok(data);
	} else {
		response = await httpResponse.noContent();
	}

	return response;
};

export const getPlayerByIdService = async (req: Request) => {
	const id = Number(req.params.id);
	if (isNaN(id) || id <= 0) {
		return await httpResponse.badRequest();
	}

	const data = await PlayerRepository.findPlayerById(id);
	let response = null;

	if (data) {
		response = await httpResponse.ok(data);
	} else {
		response = await httpResponse.noContent();
	}

	return response;
};

export const createPlayerService = async (req: Request) => {
	const { name, club, nationality, position, statistics } = req.body;

	if (!name || !club || !nationality || !position || !statistics) {
		return await httpResponse.badRequest();
	}
	const data = await PlayerRepository.createPlayer(
		name,
		club,
		nationality,
		position,
		statistics
	);

	let response = null;

	if (data) {
		response = await httpResponse.created();
	} else {
		response = await httpResponse.noContent();
	}

	return response;
};

export const updatePlayerService = async (req: Request) => {
	const id = Number(req.params.id);
	if (isNaN(id) || id <= 0) {
		return await httpResponse.badRequest();
	}

	const { name, club, nationality, position, statistics } = req.body;

	const data = await PlayerRepository.patchPlayer(
		id,
		name,
		club,
		nationality,
		position,
		statistics
	);
	let response = null;
	if (data) {
		response = await httpResponse.ok(data);
	} else {
		response = await httpResponse.noContent();
	}

	return response;
};
export const deletePlayerService = async (req: Request) => {
	const id = Number(req.params.id);
	if (isNaN(id) || id <= 0) {
		return await httpResponse.badRequest();
	}

	const data = await PlayerRepository.deletePlayer(id);
	let response = null;

	if (data) {
		response = await httpResponse.ok(data);
	} else {
		response = await httpResponse.noContent();
	}

	return response;
};
