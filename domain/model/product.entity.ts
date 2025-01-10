import { Price } from './valueObjects/priceValue';

export interface ItemEntity {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  free_shipping: boolean
}
