import { Router } from "express";

import { getAllStagesByFestival, getStageById, createStage, updateStage, deleteStage } from "../controllers/stages.controller";
import { authenticateJWT, authorizeRoles } from "../helpers/jwt";
const router = Router()

router.post('/', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), createStage)
router.get('/:id', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), getAllStagesByFestival)
router.get('/:id', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), getStageById)
router.put('/:id', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), updateStage)
router.delete('/:id', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), deleteStage)



export default router;