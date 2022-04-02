import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";

export interface Rating {
  rate: number;
  count: number;
}

export interface IProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export class ProductsStore {
  products: IProducts[] = [];
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      products: observable,
      fetchProducts: action,
      getProducts: computed,
    });
    this.rootStore = rootStore;
  }

  async fetchProducts() {
    const productsResponse = await axios.get(
      "https://fakestoreapi.com/products"
    );
    this.products = productsResponse?.data ?? [];
  }

  get getProducts() {
    return this.products;
  }
}
