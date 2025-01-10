import { ItemEntity } from './product.entity';

export interface Author{
  name: string;
  lastname: string;
}

export class ItemsEntity {
  private _author: Author = {
    name: '',
    lastname: ''
  };
  private _categories: string[] = [];
  private _items: ItemEntity[] = [];

  set author(author: Author){
    if(!author.name || !author.lastname){
      const error = {
        code: 500,
        response: {
          data: {
            message: 'The name and lastname of the author are required'
          }
        }
      }
      throw error;
    }
    this._author = author;
  }

  set categories(categories: string[]){
    this._categories = categories;
  }

  set items(items: ItemEntity[]){
    this._items = items;
  }

  get author(){
    return this._author;
  }
  get categories(){
    return this._categories;
  }
  get items(){
    return this._items;
  }
}
