import { ItemDetailEntity } from '../model/product-detail.entity';
import { ItemsEntity } from '../model/products.entity';

export interface IItemRepository {
  getItemById: (id: string) => Promise<ItemDetailEntity>
  getItems: (query: string) => Promise<ItemsEntity>
}
