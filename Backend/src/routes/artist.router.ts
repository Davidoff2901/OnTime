import { Router } from "express";

import { getAllArtists, createArtist, deleteArtist, getArtistById, updateArtist } from "../controllers/artist.controller";
import { authenticateJWT, authorizeRoles } from "../helpers/jwt";

const router = Router()

router.get('/', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), getAllArtists)
router.get('/:id', authenticateJWT, authorizeRoles('USER', 'ORGANIZER', 'ADMIN'), getArtistById)
router.post('/', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), createArtist)
router.put('/:id', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), updateArtist)
router.delete('/:id', authenticateJWT, authorizeRoles('ORGANIZER', 'ADMIN'), deleteArtist)

export default router;