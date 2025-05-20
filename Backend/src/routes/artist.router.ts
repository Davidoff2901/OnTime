import { Router } from "express";

import { getAllArtists, createArtist, deleteArtist, getArtistById, updateArtist } from "../controllers/artist.controller";

const router = Router()

router.get('/', getAllArtists)
router.get('/:id', getArtistById)
router.post('/', createArtist)
router.put('/:id', updateArtist)
router.delete('/:id', deleteArtist)

export default router;