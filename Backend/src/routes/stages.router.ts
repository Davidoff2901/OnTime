import { Router } from "express";

import { getAllStages, getStageById, createStage, updateStage, deleteStage } from "../controllers/stages.controller";
import { authenticateJWT, authorizeRoles } from "../helpers/jwt";
const router = Router()

router.get('/', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), getAllStages)
router.get('/:id', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), getStageById)
router.post('/', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), createStage)
router.put('/:id', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), updateStage)
router.delete('/:id', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), deleteStage)

export default router;