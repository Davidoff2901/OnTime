import { Router } from "express";

import { getAllTickets, createTicket, deleteTicket } from "../controllers/tickets.controller";
const router = Router()

router.get('/', getAllTickets)
router.post('/', createTicket)
// router.put('/:id', updateTicket)
router.delete('/:id', deleteTicket)

export default router;