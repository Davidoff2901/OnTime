import { Router } from "express";

import { authenticateJWT, authorizeRoles } from "../helpers/jwt";
import { createPerformance, deletePerformance, getAllPerformances, getPerformanceByID, getPerformancesByFilter, updatePerformance } from "../controllers/performance.controller";

const router = Router()

router.get('/',  getAllPerformances)
router.post('/', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), createPerformance)

router.get('/:artistId/:stageId/:day', authenticateJWT, authorizeRoles('USER', 'USER', 'ORGANIZER', 'ADMIN'), getPerformanceByID)
router.get('/:artistId/:stageId/:day', authenticateJWT, authorizeRoles('USER', 'USER', 'ORGANIZER', 'ADMIN'), getPerformancesByFilter)
router.put('/:artistId/:stageId/:day', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), updatePerformance)
router.delete('/:artistId/:stageId/:day', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), deletePerformance)

export default router;