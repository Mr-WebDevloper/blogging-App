import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogOutComponent } from './log-out/log-out.component';
import { AddCatgoryComponent } from './add-catgory/add-catgory.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { CreateUsersComponent } from './create-users/create-users.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'logout',
    component: LogOutComponent,
    data: {
      title: 'Logout Page'
    }
  },


  {
    path: 'add-category',
    component: AddCatgoryComponent,
  },

  {
    path: 'add-blog',
    component: AddBlogComponent,
  },
  
  {
    path: 'add-user',
    component: CreateUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
