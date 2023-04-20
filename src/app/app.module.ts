import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { DeviceListComponent } from "./components/device-list/device-list.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { DeviceGuard } from "./guards/device.guard";
import { LoadingService } from "./services/loading.service";
import { ApplicationRef } from "@angular/core";
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent,
    LoginPageComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DeviceGuard, LoadingService, ApplicationRef ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
