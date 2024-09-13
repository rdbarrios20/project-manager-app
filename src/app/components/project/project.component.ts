import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project/project.model';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
    projects: Project[] = [];
    isModalOpen = false;
    modalTitle = '';
    modalAction = '';
    currentProject: Project = new Project();

    constructor(private projectService: ProjectService) { }

    ngOnInit(): void {
        this.getAllProjects();
    }

    getAllProjects() {
        this.projectService.getProjects()
            .subscribe({
                next: (response: any) => {
                    if (response.message === 'success') {
                        this.projects = response.projects;
                    }
                },
                error: (error) => {
                    console.log(error);
                }
            })
    }

    openModal(action: string, project?: Project) {
        this.isModalOpen = true;
        if (action === 'create') {
            this.modalTitle = 'Create Project';
            this.modalAction = 'Create';
            this.currentProject = new Project();
        } else if (action === 'edit' && project) {
            this.modalTitle = 'Edit Project';
            this.modalAction = 'Save Changes';
            this.currentProject = { ...project };
        }
    }

    closeModal() {
        this.isModalOpen = false;
    }

    onSubmit() {
        if (this.modalAction === 'Create') {
            this.createProject();
        } else if (this.modalAction === 'Save Changes') {
            this.updateProject();
        }
    }

    createProject() {
        this.projectService.createProject(this.currentProject)
            .subscribe({
                next: (response: any) => {
                    if (response.message === 'success') {
                        this.getAllProjects();
                        this.closeModal();
                    }
                },
                error: (error) => {
                    console.log(error);
                }
            });
    }

    updateProject() {
        this.projectService.updateProject(this.currentProject)
            .subscribe({
                next: (response: any) => {
                    if (response.message === 'success') {
                        this.getAllProjects();
                        this.closeModal();
                    }
                },
                error: (error) => {
                    console.log(error);
                }
            });
    }
}
