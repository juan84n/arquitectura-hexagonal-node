import { Request, Response } from 'express';

export function isAdmin (req: Request, res: Response, next: any): void {
  const { isAdmin } = req?.query;
  if (isAdmin === 'true') {
    next();
  } else {
    next(res.status(403).json({ status: '403', error: 'Es admin' }));
  }
}
