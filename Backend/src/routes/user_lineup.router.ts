import { Router } from "express";

import { getLineup, createLineup, updateLineup, deleteLineup } from "../controllers/user_lineup.controller";
import { authenticateJWT, authorizeRoles } from "../helpers/jwt";
const router = Router()

router.get('/', authenticateJWT, authorizeRoles('USER'), getLineup)
router.post('/', authenticateJWT, authorizeRoles('USER'), createLineup)
router.put('/:id', authenticateJWT, authorizeRoles('USER'), updateLineup)
router.delete('/:id', authenticateJWT, authorizeRoles('USER'), deleteLineup)

export default router;