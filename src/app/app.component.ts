import { Component } from "@angular/core";
import { LoadingService } from "./services/loading.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "my-app";
  loading$ = this.loadingService.loading$;

  constructor(private loadingService: LoadingService) {}
}
