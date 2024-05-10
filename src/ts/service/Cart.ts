import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalCost(): number {
        return this._items.reduce((acc, item) => acc + item.price, 0);
    }

    totalCostDiscount(discount: number): number {
        return this.totalCost() * discount / 100;
    }

    deleteObject(id: number): void {
        const index = this._items.findIndex(item => item.id === id);
        this._items.splice(index, 1);
      }
}