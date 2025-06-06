import { Router } from "express";

import { authenticateJWT, authorizeRoles } from "../helpers/jwt";
import { createPerformance, deletePerformance, getAllPerformances, getPerformanceByID, getPerformancesByArtist, getPerformancesByStage, updatePerformance } from "../controllers/performance.controller";

const router = Router()

router.get('/', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), getAllPerformances)
router.post('/', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), createPerformance)

router.get('/:artistId/:stageId/:day', authenticateJWT, authorizeRoles('USER', 'USER', 'ORGANIZER', 'ADMIN'), getPerformanceByID)
router.put('/:artistId/:stageId/:day', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), updatePerformance)
router.delete('/:artistId/:stageId/:day', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), deletePerformance)

router.get('/by-stage/:stageId', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), getPerformancesByStage);
router.get('/by-artist/:artistId', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), getPerformancesByArtist);

export default router;