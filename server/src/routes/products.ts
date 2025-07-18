// server/src/routes/products.ts
import { Router, Request, Response } from 'express';

const router = Router();

/**
 * GET /api/products
 * Returns a test string for product listing
 */
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Test products list' });
});

/**
 * GET /api/products/:id
 * Returns a test string for a single product
 */
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Test product detail for ID ${id}` });
});

export default router;