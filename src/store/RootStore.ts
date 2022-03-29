import { LoginStore } from "./loginStore";

export interface IRootStore {
  loginStore: LoginStore;
}

export class RootStore implements IRootStore {
  loginStore: LoginStore;

  constructor() {
    this.loginStore = new LoginStore(this);
  }
}
