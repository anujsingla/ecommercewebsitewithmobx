import { LoginStore } from "./loginStore";
import { ProductsStore } from "./productsStore";

export interface IRootStore {
  loginStore: LoginStore;
  productsStore: ProductsStore;
}

export class RootStore implements IRootStore {
  loginStore: LoginStore;
  productsStore: ProductsStore;

  constructor() {
    this.loginStore = new LoginStore(this);
    this.productsStore = new ProductsStore(this);
  }
}
