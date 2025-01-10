import axios from 'axios';
import { constants } from '../../application/utils/constants';
import { ItemDetailEntity } from '../../domain/model/product-detail.entity';
import { ItemsEntity } from '../../domain/model/products.entity';
import { BusinessException } from '../../domain/exception/exception';
import { responseToItemDetail, responseToItems } from '../transformers/itemMapper';
import { IItemRepository } from '../../domain/repository/itemRepository';

export class ItemApiAdapter implements IItemRepository {
  async getItems (query: string): Promise<ItemsEntity> {
    try {
      const response: any = await axios.get(`${constants.URL}/search?q=${query}&available_filters=category`);
      const itemsEntity: ItemsEntity = responseToItems(response);
      console.log(itemsEntity.items[0].price.currencyUSD());
      return itemsEntity;
    } catch (error: any) {
      console.log('errror', error);
      throw new BusinessException(error);
    }
  }

  async getItemById (id: string): Promise<ItemDetailEntity> {
    try {
      const requestId = axios.get(`${constants.URL_DETAILS}${id}`);
      const requestDescription = axios.get(`${constants.URL_DETAILS}${id}/description`);
      const response: any = await Promise.all([requestId, requestDescription]);
      const itemDetailEntity: ItemDetailEntity = responseToItemDetail(response);
      return itemDetailEntity;
    } catch (error: any) {
      throw new BusinessException(error);
    }
  }
}
