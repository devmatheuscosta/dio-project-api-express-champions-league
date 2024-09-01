import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";
import * as ClubController from "./controllers/clubs-controller";

const router = Router();

router.get("/players", PlayerController.getPlayer);
router.get("/players/:id", PlayerController.getPlayerById);

router.post("/players", PlayerController.postPlayer);

router.patch("/players/:id", PlayerController.patchPlayer);

router.delete("/players/:id", PlayerController.deletePlayer);

router.get("/clubs", ClubController.getClubs);

export default router;
