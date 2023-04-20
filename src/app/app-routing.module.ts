import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DeviceGuard } from "./guards/device.guard";
import { DeviceListComponent } from "./components/device-list/device-list.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginPageComponent },
  { path: "device", component: DeviceListComponent, canActivate: [DeviceGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
