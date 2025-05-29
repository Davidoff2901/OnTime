import { Router } from "express";

import { getAllUsers, getUserByID, createUser, updateUser, deleteUser, login } from "../controllers/user.controller";

const router = Router()

router.post('/register', createUser)
router.post('/login', login)
router.get('/', getAllUsers)
router.get('/:id', getUserByID)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
//update password

export default router;