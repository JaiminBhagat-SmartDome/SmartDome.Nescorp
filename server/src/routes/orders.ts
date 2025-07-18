// server/src/routes/orders.ts
import { Router, Request, Response } from 'express';

const router = Router();

/**
 * GET /api/orders
 * Returns a test string for order listing
 */
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Test orders list' });
});

/**
 * POST /api/orders
 * Returns a test string for order creation
 */
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Test create order' });
});

export default router;