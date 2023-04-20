import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginResponse } from "../models/login.model";
import { User } from "../models/user-data.model";


@Injectable({
  providedIn: "root"
})
export class LoginService {

  constructor(private http: HttpClient) {}

  public authorization(url: string, data: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(url, data);
  }

}
