import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ToasterService } from '../../../services/toaster.service';
import { Subject } from 'rxjs';
import { ApiserviceService } from '../../../services/apiservice.service';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-add-catgory',
  templateUrl: './add-catgory.component.html',
  styleUrls: ['./add-catgory.component.scss'],
})
export class AddCatgoryComponent {
  isLoading: boolean = false;
  CategoryName: any;

  selectedCategory: any;
  allCategory: any;

  constructor(
    private router: Router,
    private NgbModal: NgbModal,
    private utilservice: UtilService,
    private apiservice: ApiserviceService,
    public toasterService: ToasterService
  ) {}
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  async ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      //   lengthMenu: [
      //     [5, 10, 25, 50, -1 ],
      //     [ '5 rows','10 rows', '25 rows', '50 rows', 'Show all' ]
      // ],
    };
    await this.getcategoryData();
  }

  async getcategoryData() {
    this.isLoading = true;
    try {
      const res = await this.apiservice.getCategories();
      this.allCategory = res.data.data;

      this.isLoading = false;
      this.dtTrigger.next('');
    } catch (e: any) {
      this.isLoading = false;
      if (e.response.status == 401) {
        this.router.navigateByUrl('/login');
      }
    }
  }

  async addCategory() {
    if (!this.CategoryName) {
      this.toasterService.showWarning('Please enter Category name', '');
      return;
    }
    this.isLoading = true;

    try {
      const res = await this.apiservice.addCategory({
        name: this.CategoryName,
        isActive: 1,
      });
      this.isLoading = false;
      if (res.data.status) {
        this.toasterService.showSuccess(res.data.message, '');
        window.location.reload();
      }
    } catch (e: any) {
      this.toasterService.showError(e.response.data.message, '');
      this.isLoading = false;

      if (e.response.status == 401) {
        this.router.navigateByUrl('/login');
      }
    }
  }
  async updateCategory() {
    if (!this.CategoryName) {
      this.toasterService.showWarning('Please enter category name', '');
      return;
    }
    let param = {
      name: this.CategoryName,
      isActive: true,
      categoryId: this.selectedCategory._id,
    };
    this.isLoading = true;
    window.location.reload();
    try {
      const res = await this.apiservice.updateCategory(param);
      this.isLoading = false;
      if (res.data.status) {
        this.toasterService.showSuccess(res.data.message, '');
        window.location.reload();
      }
    } catch (e: any) {
      this.toasterService.showError(e.response.data.message, '');
      this.isLoading = false;
      if (e.response.status == 401) {
        this.router.navigateByUrl('/login');
      }
    }
  }

  async deleteCategory(d: any) {
    let param = {
      categoryId: d._id,
    };
    this.isLoading = true;

    try {
      const res = await this.apiservice.deleteCategory(param);
      this.isLoading = false;
      if (res.data.status) {
        this.toasterService.showSuccess('Category deleted succesfully', '');
        window.location.reload();
      }
    } catch (e: any) {
      this.toasterService.showError(e.response.data.message, '');
      this.isLoading = false;
      if (e.response.status == 401) {
        this.router.navigateByUrl('/login');
      }
    }
  }

  async openLgModalAdd(content: TemplateRef<any>, d: any) {
    this.selectedCategory = d;
    this.CategoryName = d.name;

    this.NgbModal.open(content, { backdrop: 'static' })
      .result.then((result: any) => {
        this.CategoryName = '';
      })
      .catch((res: any) => {});
  }
}
