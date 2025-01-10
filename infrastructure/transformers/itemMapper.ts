import { ItemDetailEntity } from '../../domain/model/product-detail.entity';
import { ItemEntity } from '../../domain/model/product.entity';
import { Author, ItemsEntity } from '../../domain/model/products.entity';
import { Price } from '../../domain/model/valueObjects/priceValue';

export function responseToItems (response: any): ItemsEntity {
  const author: Author = {
    name: 'Juan',
    lastname: 'Narvaez'

  };
  const items: ItemEntity[] = response.data.results.splice(0, 4).map((item: any) => {
      const prices = item.price.toString().split('.');
      const address = `${item.address.state_name} - ${item.address.city_name}`;
      const price = new Price(item.currency_id, prices[0], prices[1]);
      return {
        id: item.id,
        title: item.title,
        price,
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        address
      };
  });

  const itemsEntity = new ItemsEntity();
  itemsEntity.author = author;
  itemsEntity.categories = response.data.available_filters[0].values;
  itemsEntity.items = items;

  return itemsEntity;
}

export function responseToItemDetail (response: any): ItemDetailEntity {
  const data: ItemDetailEntity = {
    id: response[0].data.id,
    site_id: response[0].data.site_id,
    title: response[0].data.title,
    subtitle: response[0].data.subtitle,
    seller_id: response[0].data.seller_id,
    category_id: response[0].data.category_id,
    official_store_id: response[0].data.official_store_id,
    price: response[0].data.price,
    base_price: response[0].data.base_price,
    original_price: response[0].data.original_price,
    currency_id: response[0].data.currency_id,
    initial_quantity: response[0].data.initial_quantity,
    available_quantity: response[0].data.available_quantity,
    sold_quantity: response[0].data.sold_quantity,
    sale_terms: response[0].data.sale_terms,
    buying_mode: response[0].data.buying_mode,
    listing_type_id: response[0].data.listing_type_id,
    start_time: response[0].data.start_time,
    stop_time: response[0].data.stop_time,
    condition: response[0].data.condition,
    permalink: response[0].data.permalink,
    thumbnail_id: response[0].data.thumbnail_id,
    thumbnail: response[0].data.thumbnail,
    secure_thumbnail: response[0].data.secure_thumbnail,
    pictures: response[0].data.pictures,
    video_id: response[0].data.video_id,
    descriptions: response[0].data.descriptions,
    accepts_mercadopago: response[0].data.accepts_mercadopago,
    non_mercado_pago_payment_methods: response[0].data.non_mercado_pago_payment_methods,
    shipping: response[0].data.shipping,
    international_delivery_mode: response[0].data.international_delivery_mode,
    seller_address: response[0].data.seller_address,
    seller_contact: response[0].data.seller_contact,
    location: response[0].data.location,
    coverage_areas: response[0].data.coverage_areas,
    attributes: response[0].data.attributes,
    warnings: response[0].data.warnings,
    listing_source: response[0].data.listing_source,
    variations: response[0].data.variations,
    status: response[0].data.status,
    sub_status: response[0].data.sub_status,
    tags: response[0].data.tags,
    warranty: response[0].data.warranty,
    catalog_product_id: response[0].data.catalog_product_id,
    domain_id: response[0].data.domain_id,
    parent_item_id: response[0].data.parent_item_id,
    differential_pricing: response[0].data.differential_pricing,
    deal_ids: response[0].data.deal_ids,
    automatic_relist: response[0].data.automatic_relist,
    date_created: response[0].data.date_created,
    last_updated: response[0].data.last_updated,
    health: response[0].data.health,
    catalog_listing: response[0].data.catalog_listing,
    channels: response[0].data.channels,
    plain_text: response[1].data.plain_text
  };

  return data;
}
