import { Router } from "express";

import { getAllFestivals, getFestivalByID, createFestival, updateFestival, deleteFestival, getFestivalByOrganizer } from "../controllers/festival.controller";
import { authenticateJWT, authorizeRoles } from "../helpers/jwt";
const router = Router()

router.get('/by-organizer/:email', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), getFestivalByOrganizer)
router.get('/', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), getAllFestivals)
router.post('/', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), createFestival)
router.get('/:id', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), getFestivalByID)
router.put('/:id', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), updateFestival)
router.delete('/:id', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), deleteFestival)

export default router;