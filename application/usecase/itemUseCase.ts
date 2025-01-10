import { ItemDetailEntity } from '../../domain/model/product-detail.entity';
import { ItemsEntity } from '../../domain/model/products.entity';
import { IItemRepository } from '../../domain/repository/itemRepository';

export class ItemUseCase {
  itemRepository: IItemRepository = {} as any;

  constructor (itemRepository: IItemRepository) {
    this.itemRepository = itemRepository;
  }

  async getAllItems (query: string): Promise<ItemsEntity> {
    const items: ItemsEntity = await this.itemRepository.getItems(query);
    return items;
  }

  async getItemsById (id: string): Promise<ItemDetailEntity> {
    const item: ItemDetailEntity = await this.itemRepository.getItemById(id);
    return item;
  }
}
