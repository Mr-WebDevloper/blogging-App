import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster.service';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoading:boolean=false;
  alert1closed: boolean = true;
  loginRes: any;
  emailId: any;
  password: any;
  inValidEmail: boolean = false;
  constructor(private utilservice: UtilService, private router: Router, private route: ActivatedRoute, private apiservice: ApiserviceService,  public toasterService:ToasterService ) { }

  ngOnInit(): void {
  }

  async onLoggedin() {

    if (!this.emailId) {
      this.inValidEmail = true
      this.toasterService.showWarning("Please enter email id", "");
      return;
    }
    this.inValidEmail = false
    const validateEmail = await this.utilservice.validateEmail(this.emailId);
    if (!validateEmail) {
      this.inValidEmail = true
      this.toasterService.showWarning("Please enter valid email id", "");
      return;
    }
    this.inValidEmail = false
    if (!this.password) {
      this.toasterService.showWarning("Please enter password", "");
      return;
    }
    let param = {
      email: this.emailId,
      password: this.password,
    }
    this.router.navigateByUrl('add-blog');
// console.log(param)
    this.isLoading = true;
    try {
      const res = await this.apiservice.userLogin(param);
      if (res.data.status) {
        this.toasterService.showSuccess(res.data.message,"")
        const userDetails = res.data.userDetails;
        localStorage.clear();
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        localStorage.setItem('token', res.data.token);
        this.alert1closed = false;
        this.loginRes = res.data.message;

        setTimeout(async () => {
          this.alert1closed = true;

          await this.apiservice.updateToken();
          this.isLoading = false;
          this.router.navigateByUrl('/add-blog');
            
        }, 1000);
      }
    } catch (e: any) {
      this.toasterService.showError(e.response.data.message, "")
      this.isLoading = false;
      if (e.response.status == 401) {
        this.router.navigateByUrl('/login');
      }
    }
  }
}
