import { Router } from "express";

import { getAllStages, getStageById, createStage, updateStage, deleteStage, getStagesByFestival } from "../controllers/stages.controller";
import { authenticateJWT, authorizeRoles } from "../helpers/jwt";
const router = Router()

router.get('/', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), getAllStages)
router.post('/', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), createStage)
router.get('/:id', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), getStageById)
router.put('/:id', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), updateStage)
router.delete('/:id', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), deleteStage)
router.get('/by-festival/:festivalId', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), getStagesByFestival);



export default router;