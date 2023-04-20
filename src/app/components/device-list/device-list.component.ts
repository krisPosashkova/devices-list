import { Component, OnDestroy, OnInit } from "@angular/core";
import { DeviceService } from "src/app/services/device.service";
import { LoadingService } from "src/app/services/loading.service";
import { Observer, Subscription } from "rxjs";
import { Device } from "src/app/models/device.model";
import { ResponseDeviceData } from "src/app/models/metering-devices.model";
import { ErrorResponse } from "src/app/models/error.model";
import { DEFAULT_ERROR_LOGIN_MSG } from "src/app/constants";
import { StorageService } from "src/app/services/storage.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-device-list",
  templateUrl: "./device-list.component.html",
  styleUrls: ["./device-list.component.scss"]
})

export class DeviceListComponent implements OnInit, OnDestroy{
  private subscription: Subscription = new Subscription();
  devices: Device[] = [];
  errorMessage: string | null = "";
  loading$ = this.loadingService.loading$;

  constructor(private deviceService: DeviceService, 
              private loadingService: LoadingService,
              private storageService: StorageService,
              private router: Router) {}

  ngOnInit(): void {
    const observer: Observer<ResponseDeviceData> = {
      next: (response: ResponseDeviceData) => {
        this.devices =
          response.data?.metering_devices?.data?.map((device) => ({
            ...device,
            lastActiveDate: this.formatDate(device.last_active),
          })) || [];
      },
      error: (error: ErrorResponse) => {
        this.errorMessage = error.error?.error?.msg || DEFAULT_ERROR_LOGIN_MSG;
        this.loadingService.setLoading(false) 
      },
      complete: () => { 
        this.loadingService.setLoading(false) 
      }
    };
    this.subscription = this.deviceService.getMeteringDevices().subscribe(observer)
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  formatDate(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleString("ru-RU", options);
  }

  logout() {
    this.storageService.removeToken();
    this.router.navigateByUrl("/login");
  }
}
