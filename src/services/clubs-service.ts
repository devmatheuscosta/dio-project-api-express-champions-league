import * as httpResponse from "../utils/http-helper";
import * as ClubRepository from "../repositories/clubs-repository";

export const getClubService = async () => {
	const data = await ClubRepository.findAllClubs();
	let response = null;

	if (data) {
		response = await httpResponse.ok(data);
	} else {
		response = await httpResponse.noContent();
	}

	return response;
};
