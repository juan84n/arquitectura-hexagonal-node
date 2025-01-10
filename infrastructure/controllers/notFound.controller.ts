import Router from '../../application/decorators/routing';
import { Request, Response } from 'express';
import { ResponseEntity } from './response/response';

export class NotFoundController {
    @Router({
        method: 'use',
        path: ''
    })
    async notFound (req: Request, res: Response): Promise<ResponseEntity<any>>{
        return Promise.
        resolve(new ResponseEntity<any>(404, {error: 'Page not found on this new server'}));
    }
}