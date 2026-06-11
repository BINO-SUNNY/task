import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Data } from '../services/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(private ds: Data) {}

  projectName = '';
  taskName = '';

  projects: any[] = [];
  selectedProject: any = null;

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {

    this.ds.getProjects().subscribe({
      next: (result: any) => {
        this.projects = result;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  addProject() {

    if (this.projectName.trim()) {

      const projectData = {
        name: this.projectName
      };

      this.ds.addProject(projectData).subscribe({
        next: (result: any) => {

          this.projects.push(result);

          this.projectName = '';
        },
        error: (err) => {
          console.log(err);
        }
      });

    }

  }

  showDetails(project: any) {

    if (this.selectedProject === project) {
      this.selectedProject = null;
    } else {
      this.selectedProject = project;
    }

  }

  addTask() {

    if (this.taskName.trim() && this.selectedProject) {

      this.selectedProject.tasks.push(this.taskName);

      this.taskName = '';
    }

  }

  deleteTask(index: number) {

    this.selectedProject.tasks.splice(index, 1);

  }

  moveUp(index: number) {

    if (index > 0) {

      const temp = this.selectedProject.tasks[index];

      this.selectedProject.tasks[index] =
        this.selectedProject.tasks[index - 1];

      this.selectedProject.tasks[index - 1] = temp;

    }

  }

  moveDown(index: number) {

    if (index < this.selectedProject.tasks.length - 1) {

      const temp = this.selectedProject.tasks[index];

      this.selectedProject.tasks[index] =
        this.selectedProject.tasks[index + 1];

      this.selectedProject.tasks[index + 1] = temp;

    }

  }

}