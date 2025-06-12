import { Router } from "express";

import { getAllTickets, purchaseTicket, deleteTicket, getFestivalsByTicket } from "../controllers/tickets.controller";
import { authenticateJWT, authorizeRoles } from "../helpers/jwt";
const router = Router()

router.get('/', authenticateJWT, authorizeRoles('USER', 'ADMIN'), getAllTickets)
router.post('/', authenticateJWT, authorizeRoles('USER', 'ADMIN', 'ORGANIZER'), purchaseTicket)
router.get('/:email', authenticateJWT, authorizeRoles('USER', 'ADMIN', 'ORGANIZER'), getFestivalsByTicket)
router.delete('/:id', authenticateJWT, authorizeRoles('ADMIN'), deleteTicket)

export default router;