import { Request, Response } from 'express';
import { ItemDetailEntity } from '../../domain/model/product-detail.entity';
import { ItemUseCase } from '../../application/usecase/itemUseCase';
import Router from '../../application/decorators/routing';
import { ItemApiAdapter } from '../adapters/itemApiAdapter';
import { ItemsEntity } from '../../domain/model/products.entity';
import { ResponseEntity } from './response/response';
import { isAdmin } from '../../application/middlewares/middleware';

export class ItemsController {

  itemUseCase: ItemUseCase = {} as ItemUseCase;

  constructor () {
    this.itemUseCase = new ItemUseCase(new ItemApiAdapter());
  }
  
  @Router({
    path: '/items',
    method: 'get',
    middlewares: [isAdmin]
  })
  getAllItems (req: Request, res: Response): Promise<ResponseEntity<ItemsEntity>> {
    const { search } = req?.query;
    console.log(search);
    return this.itemUseCase.getAllItems(search as string)
    .then(items =>  new ResponseEntity<ItemsEntity>(200, items));
  }

  @Router({
    path: '/items/:id',
    method: 'get',
  })
  async getItemById (req: Request, res: Response): Promise<ResponseEntity<ItemDetailEntity>> {
    const { id } = req?.params;
    return this.itemUseCase.getItemsById(id)
    .then(items =>  new ResponseEntity<ItemDetailEntity>(200, items));
  }

  @Router({
    path: '/test',
    method: 'post'
  })
  async testPostPath(req: Request, res: Response): Promise<ResponseEntity<any>> {
    return Promise.resolve(new ResponseEntity(200, {response: 'Hemos llegado ' + req?.body?.param1}));
  }
}
