import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    
  urlApi = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  getProjects(){
    return this.http.get(this.urlApi + 'project/projects');
  }

  createProject(project: Project){
    return this.http.post(this.urlApi + 'project/project', project)
  }

  updateProject(project: Project){
    return this.http.put(this.urlApi + 'project/project/' + project.id, project)
  }
}
