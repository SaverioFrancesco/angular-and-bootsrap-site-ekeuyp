import { Component, OnInit } from '@angular/core';
import { team } from '../persons';


@Component({
  selector: 'app-meet-the-team',
  templateUrl: './meet-the-team.component.html',
  styleUrls: ['./meet-the-team.component.css']
})
export class MeetTheTeamComponent implements OnInit {

  persons=team;

  constructor() { }

  ngOnInit() {
  }

}