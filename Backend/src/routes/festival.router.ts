import { Router } from "express";

import { getAllFestivals, getFestivalByID, createFestival, updateFestival, deleteFestival } from "../controllers/festival.controller";
import { authenticateJWT, authorizeRoles } from "../helpers/jwt";
const router = Router()

router.get('/', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), getAllFestivals)
router.get('/:id', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), getFestivalByID)
router.post('/', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), createFestival)
router.put('/:id', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), updateFestival)
router.delete('/:id', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), deleteFestival)

export default router;