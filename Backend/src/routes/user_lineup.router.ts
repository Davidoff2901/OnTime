import { Router } from "express";

import { getLineup, createLineup, updateLineup, deleteLineup, getUserLineup } from "../controllers/user_lineup.controller";
import { authenticateJWT, authorizeRoles } from "../helpers/jwt";
const router = Router()

router.get('/', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), getLineup)
router.get('/:email', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), getUserLineup)
router.post('/', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), createLineup)
// router.put('/:id', authenticateJWT, authorizeRoles('USER'), updateLineup)
router.delete('/:id', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), deleteLineup)

export default router;