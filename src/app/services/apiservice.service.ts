import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 

  API = axios.create({
    baseURL: environment.baseUrl,
    withCredentials: true,
    headers: {
      'Authorization': localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
    }
  })

  constructor() { }

  async updateToken() {
    this.API = axios.create({
      baseURL: environment.baseUrl,
      headers: {
        Authorization: localStorage.getItem("token")
          ? `Bearer ${localStorage.getItem("token")}`
          : "",
        "Access-Control-Allow-Credentials": true,
      },
    });
  }
  

  async userLogin(param: any) {
    return await this.API.post('/auth/login', param);
  }

  async addUser(param: any) {
    return await this.API.post('/auth/register', param);
  }


async addCategory(param:any){
  return await this.API.post('/api/addCategory',param)
} 


async updateCategory(param:any){
  return await this.API.put('/api/updateCategory',param)   
}


async deleteCategory(param:any){
  return await this.API.put('/api/deleteCategory',param)   
}

async getCategories(){
  return await this.API.get('/api/getAllCategory')
}

async getBlog(){
  return await this.API.get('/api/getAllBlogs')
}

async addBlog(param:any){
  return await this.API.post('/api/addBlogs',param)
}

async deleteBlog(param:any){
  return await this.API.put('/api/deleteBlog',param)
}

async updateBlog(param:any){
  return await this.API.put('/api/updateBlog',param)
}


}