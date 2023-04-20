import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL, ACCESS_TOKEN, SEARCH_PARAMS } from "../constants";
import { ResponseDeviceData } from "../models/metering-devices.model";


@Injectable({
  providedIn: "root"
})
export class DeviceService {
  constructor(private http: HttpClient) { }


  getMeteringDevices(): Observable<ResponseDeviceData> {
    const token: string | null = localStorage.getItem(ACCESS_TOKEN);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      })
    };

    return this.http.post<ResponseDeviceData>(`${API_URL}/device/metering_devices`, SEARCH_PARAMS, httpOptions);
  }
}

