import { Router } from "express";

import { getLineup, createLineup, updateLineup, deleteLineup } from "../controllers/user_lineup.controller";
const router = Router()

router.get('/', getLineup)
router.post('/', createLineup)
router.put('/:id', updateLineup)
router.delete('/:id', deleteLineup)

export default router;