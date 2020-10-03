import {count} from 'rxjs/operators';
import {Content} from './content-interface';
export class ContentList {
  static content = 0;
  private _items: Content[];
  constructor() {
    this._items = [];
    this.increase();
  }
  get items(): Content[]{
    return this._items;
  }
  increase(): number {
    return ContentList.content++;
  }
  arrayCount(): number {
    return this._items.length;
  }
  contentAdd(content: Content): void {
    this._items.push(content);
  }
  formatting(id: number): string {
    return '<h1> ID: ' + this._items[id].id + '</h1>' +
      '<h2> Author: ' + this._items[id].author + '</h2>' +
      '<h2> Title: ' + this._items[id].title + '</h2>' +
      '<h2> Body:  ' + this._items[id].body + '</h2>';
  }

}
