import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ACCESS_TOKEN } from "../constants";

@Injectable({
  providedIn: "root"
})

export class StorageService {
  private token: string | null;
  private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor() {
    this.token = localStorage.getItem(ACCESS_TOKEN);
    this.tokenSubject.next(this.token);
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem(ACCESS_TOKEN, token);
    this.tokenSubject.next(this.token);
  }

  getToken() {
    return this.token;
  }

  isLoggedIn() {
    return !!this.token;
  }

  removeToken() {
    localStorage.removeItem(ACCESS_TOKEN)
  }

  getTokenObservable() {
    return this.tokenSubject.asObservable();
  }
}
