import { Router } from "express";

import { getAllUsers, getUserByID, createUser, updateUser, deleteUser } from "../controllers/user.controller";

const router = Router()

router.get('/', getAllUsers)
router.get('/:id', getUserByID)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router;