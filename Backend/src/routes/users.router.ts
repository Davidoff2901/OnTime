import { Router } from "express";

import { getAllUsers, getUserByID, createUser, updateUser, deleteUser, login } from "../controllers/user.controller";
import { authenticateJWT, authorizeRoles } from "../helpers/jwt";

const router = Router()

router.post('/register', createUser)
router.post('/login', login)
router.get('/', authenticateJWT, authorizeRoles('ADMIN'), getAllUsers)
router.get('/:id', authenticateJWT, authorizeRoles('ADMIN'), getUserByID)
router.put('/:id', authenticateJWT, authorizeRoles('USER','ADMIN'), updateUser)
router.delete('/:id', authenticateJWT, authorizeRoles('ADMIN'), deleteUser)
//update password

export default router;