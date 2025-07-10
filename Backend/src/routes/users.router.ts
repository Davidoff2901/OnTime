import { Router } from "express";

import { getAllUsers, getUserByID, createUser, updateUser, deleteUser, login, forgotPassword, resetPassword, changePassword } from "../controllers/user.controller";
import { authenticateJWT, authorizeRoles } from "../helpers/jwt";

const router = Router()


router.post('/register', createUser)
router.post('/login', login)
router.post('/forgot-password', forgotPassword);
router.put('/reset-password', resetPassword);
router.put('/change-password', authenticateJWT, changePassword);

router.get('/', authenticateJWT, getAllUsers)
router.get('/:id', authenticateJWT, authorizeRoles('ADMIN'), getUserByID)
router.put('/:email', authenticateJWT, authorizeRoles('USER', 'ADMIN', 'ORGANIZER'), updateUser)
router.delete('/:email', authenticateJWT, authorizeRoles('ADMIN'), deleteUser)

export default router;