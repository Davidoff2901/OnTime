import { Router } from "express";

import { authenticateJWT, authorizeRoles } from "../helpers/jwt";
import { createPerformance, deletePerformance, getAllPerformances, getStagePerformances, updatePerformance } from "../controllers/performance.controller";

const router = Router()

router.get('/', getAllPerformances)
router.post('/', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), createPerformance)

router.get('/:festivalId/stages/:stageId/performances', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), getStagePerformances)
router.put('/:id', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), updatePerformance)
router.delete('/:id', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), deletePerformance)

export default router;