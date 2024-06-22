import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ToasterService } from '../../../services/toaster.service';
import { Subject } from 'rxjs';
import { ApiserviceService } from '../../../services/apiservice.service';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent {
  isLoading: boolean = false;
  title: any;
  category: any;
  blogDescription: any;
  image_FileList: any = [];
  allblog: any;
  selectedDept: any;
  selectedblog: any;
  allCategories: any;

  constructor(private router: Router, private NgbModal: NgbModal, private utilservice: UtilService, private apiservice: ApiserviceService, public toasterService: ToasterService) {

  }
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
    }
   await this.getblogsData()
    await this.getcategoryData()
  }

  async getcategoryData() {
    this.isLoading = true;
    try {
      const res = await this.apiservice.getCategories();
      this.allCategories = res.data.data;
      this.isLoading = false;
    } catch (e: any) {
      this.isLoading = false;
      if (e.response.status == 401) {
        this.router.navigateByUrl('/login');
      }
    }
  }
  async getblogsData() {
    this.isLoading = true;
    try {
      const res = await this.apiservice.getBlog();
      this.allblog = res.data.data;
      this.isLoading = false;
      this.dtTrigger.next('');
    } catch (e: any) {
      this.isLoading = false;
      if (e.response.status == 401) {
        this.router.navigateByUrl('/login');
      }
    }
  }

  getImages(event: any) {
    this.image_FileList = event.target.files;
    console.log(this.image_FileList);
  }
  async addBlog() {
    if (!this.title) {
      this.toasterService.showWarning("Please enter blog title", "");
      return;
    }
    if (!this.category || this.category == 0) {
      this.toasterService.showWarning("Please select category", "");
      return;
    }
    if (!this.blogDescription) {
      this.toasterService.showWarning("Please enter blog description", "");
      return;
    }
 

   
    this.isLoading = true;

    try {
    var bodyFormData = new FormData();
    bodyFormData.append('title', this.title);
    bodyFormData.append('category', this.category);
    bodyFormData.append('description', this.blogDescription);

      if (this.image_FileList.length > 0) {
        for (let i = 0; i < this.image_FileList.length; i++) {
          let file: File = this.image_FileList[i];
          console.log(file);
          bodyFormData.append('file', file, file.name);
        }
      }
      const res = await this.apiservice.addBlog(bodyFormData);
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
  async updateblog() {
    if (!this.title) {
      this.toasterService.showWarning("Please enter meeting blog name", "");
      return;
    }

    this.isLoading = true;

    try {
      var bodyFormData = new FormData();
      bodyFormData.append('title', this.title);
      bodyFormData.append('category', this.category);
      bodyFormData.append('description', this.blogDescription);
      bodyFormData.append('id', this.selectedblog._id);

  
        if (this.image_FileList.length > 0) {
          for (let i = 0; i < this.image_FileList.length; i++) {
            let file: File = this.image_FileList[i];
            console.log(file);
            bodyFormData.append('file', file, file.name);
          }
        }
      const res = await this.apiservice.updateBlog(bodyFormData);
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

  async deleteBlog(d: any) {

    let param = {
      isActive: false,
      id: d._id
    }
    this.isLoading = true;

    try {
      const res = await this.apiservice.deleteBlog(param);
      this.isLoading = false;
      if (res.data.status) {
        this.toasterService.showSuccess('blog deleted succesfully', "");
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

  async openLgModalAdd(content: TemplateRef<any>, blog: any) {
    this.selectedblog = blog;
    this.title = blog.title;
    this.blogDescription = blog.description;
    this.category = blog.category;

    this.NgbModal.open(content, { backdrop: 'static' }).result.then((result: any) => {
      this.title = '';
      this.blogDescription = '';
      this.category = [];
    }).catch((res: any) => { });
    
  }

}
