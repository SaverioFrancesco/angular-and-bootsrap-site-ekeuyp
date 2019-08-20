import { Component, OnInit } from '@angular/core';
import { team } from '../persons';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  persons = team;

  constructor() { }

  ngOnInit() {
  }

}