import axios from "axios";
import { find } from "lodash";
import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";

export interface Geolocation {
  lat: string;
  long: string;
}

export interface Address {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface Name {
  firstname: string;
  lastname: string;
}

export interface IUserDetails {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
  __v: number;
}

export class LoginStore {
  loginToken: string = "";
  rootStore: IRootStore;
  userDetails: IUserDetails | null = null;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      loginToken: observable,
      userDetails: observable,
      fetchUserToken: action,
      getUserToken: computed,
      getUserDetails: computed,
    });
    this.rootStore = rootStore;
  }

  logout() {
    this.loginToken = "";
    this.userDetails = null;
  }
  async fetchUserToken(userName: string, password: string) {
    const data = {
      username: userName,
      password: password,
    };

    const tokenRes = await axios.post(
      `https://fakestoreapi.com/auth/login`,
      data
    );
    const userLists = await axios.get(`https://fakestoreapi.com/users`);
    if (tokenRes.data.token) {
      const user = find(userLists.data, (u) => u.username === userName);
      this.loginToken = tokenRes.data.token;
      this.userDetails = user;
    }
  }

  get getUserToken() {
    return this.loginToken;
  }

  get getUserDetails() {
    return this.userDetails;
  }
}
