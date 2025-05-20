import { Router } from "express";

import { getAllStages, getStageById, createStage, updateStage, deleteStage } from "../controllers/stages.controller";
const router = Router()

router.get('/', getAllStages)
router.get('/:id', getStageById)
router.post('/', createStage)
router.put('/:id', updateStage)
router.delete('/:id', deleteStage)

export default router;