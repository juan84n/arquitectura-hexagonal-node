import Router from '../../application/decorators/routing';
import { Request, Response } from 'express';
import { ResponseEntity } from './response/response';

export class HomeController {


    @Router({
        path: '/',
        method: 'get',
      })
      async home (req: Request, res: Response): Promise<ResponseEntity<any>> {
        return Promise.
        resolve(new ResponseEntity<any>(200, {home: 'Esta es la página de inicio'}));
      }
}