import { Router } from "express";

import { getAllTickets, createTicket, deleteTicket } from "../controllers/tickets.controller";
import { authenticateJWT, authorizeRoles } from "../helpers/jwt";
const router = Router()

router.get('/', authenticateJWT, authorizeRoles('USER', 'ADMIN'), getAllTickets)
router.post('/', authenticateJWT, authorizeRoles('ADMIN'), createTicket)
// router.put('/:id', updateTicket)
router.delete('/:id', authenticateJWT, authorizeRoles('ADMIN'), deleteTicket)

export default router;