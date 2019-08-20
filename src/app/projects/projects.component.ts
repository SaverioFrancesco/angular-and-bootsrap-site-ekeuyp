import { Component, OnInit } from '@angular/core';
import { projects } from '../myprojects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
currentprojects = projects
  constructor() { }

  ngOnInit() {
  }

}