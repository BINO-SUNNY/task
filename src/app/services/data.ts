import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Data {


 api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get(`${this.api}/projects`);
  }

  addProject(data: any) {
    return this.http.post(`${this.api}/projects`, data);
  }

  addTask(id: number, task: string) {
    return this.http.post(
      `${this.api}/projects/${id}/tasks`,
      { task }
    );
  }
  


  
}
