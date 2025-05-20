import { Router } from "express";

import { getAllFestivals, getFestivalByID, createFestival, updateFestival, deleteFestival } from "../controllers/festival.controller";
const router = Router()

router.get('/', getAllFestivals)
router.get('/:id', getFestivalByID)
router.post('/', createFestival)
router.put('/:id', updateFestival)
router.delete('/:id', deleteFestival)

export default router;