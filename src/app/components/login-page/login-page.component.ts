import { Component, EventEmitter, Output, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "src/app/services/login.service";
import { Observer } from "rxjs";
import { Router } from "@angular/router";
import { User } from "src/app/models/user-data.model";
import { LoadingService } from "src/app/services/loading.service";
import { StorageService } from "src/app/services/storage.service";
import { API_URL, DEFAULT_ERROR_LOGIN_MSG} from "src/app/constants";
import { Subscription } from "rxjs";
import { LoginResponse } from "src/app/models/login.model";
import { ErrorResponse } from "src/app/models/error.model";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})

export class LoginPageComponent implements OnDestroy {
  private subscription: Subscription = new Subscription();
  @Output() submitted = new EventEmitter<User>();
  loginForm: FormGroup;
  errorMessage: string = "";
  loading$ = this.loadingService.loading$;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router,
              private loadingService: LoadingService,
              private storageService: StorageService) {
      this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData: User = {
        email: this.loginForm.get("email")?.value,
        password: this.loginForm.get("password")?.value,
        personal_data_access: true
      };

      this.loadingService.setLoading(true)

      const observer: Observer<LoginResponse> = {
        next: (response: LoginResponse) => {
          const token: string = response.data?.access_token || '';
          if (!token) {
            this.errorMessage = DEFAULT_ERROR_LOGIN_MSG;
            return
          }
          this.storageService.setToken(token);
          this.router.navigateByUrl("/device")
        },
        error: (error: ErrorResponse) => {
          this.errorMessage = error.error?.error?.msg || DEFAULT_ERROR_LOGIN_MSG;
          this.loadingService.setLoading(false)
        },
        complete: () => {}
      };

      this.subscription = this.loginService.authorization(`${API_URL}/auth/login`, formData).subscribe(observer)
    } else {
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        if (control!.invalid) control!.markAsTouched({ onlySelf: true });
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
