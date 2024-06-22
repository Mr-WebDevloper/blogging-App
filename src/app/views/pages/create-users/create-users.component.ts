import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { UtilService } from 'src/app/services/util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent {
  isLoading: boolean = false;

  name: any;
  emailId: any;
  passwordStr: any;
  inValidEmail: boolean = false;
  Cpassword: any
  mobile: any

  constructor(private router: Router, private utilservice: UtilService, private apiservice: ApiserviceService, public toasterService: ToasterService) { }
  ngOnInit(): void {
  }
  async createUser() {
   
    if (!this.name) {
      this.toasterService.showWarning("Please enter last name", "");
      return;
    }
    if (!this.emailId) {
      this.toasterService.showWarning("Please enter email id", "");
      return;
    }
    const validateEmail = await this.utilservice.validateEmailDomain(this.emailId);
    if (!validateEmail) {
      this.inValidEmail = true
      this.toasterService.showWarning("Please enter valid email id", "");
      return;
    }
    this.inValidEmail = false

    if (!this.mobile) {
      this.toasterService.showWarning("Please enter mobile", "");
      return;
    }

    const validateMobileNO = await this.utilservice.IsMobileNumber(this.mobile);
    if (!validateMobileNO) {
      this.toasterService.showWarning("Please enter valid mobile no", "");
      return;
    }

    if (!this.passwordStr) {
      this.toasterService.showWarning("Please enter password", "");
      return;
    }
    const validatePassword = await this.utilservice.validatePassword(this.passwordStr);
    if (!validatePassword) {
      this.toasterService.showWarning("Password field need minimum 8 characters in length and At least one uppercase and At least one lowercase and At least one digit and At least one special character", "");
      return;
    }
    if (this.passwordStr != this.Cpassword) {
      this.toasterService.showWarning("Password and Confirm Password should be same", "");
      return
    }

    let param = {
      name: this.name,
      email: this.emailId,
      mobile: this.mobile,
      password: this.passwordStr,
    }
    this.isLoading = true;

    try {
      const res = await this.apiservice.addUser(param);
      this.isLoading = false;

      if (res.data.status) {
        this.toasterService.showSuccess(res.data.message, "");
        window.location.reload();
      }
    } catch (e: any) {
      this.toasterService.showError(e.response.data.message, "");
      this.isLoading = false;

      if (e.response.status == 401) {
        this.router.navigateByUrl('/login');
      }
    }
  }
}
