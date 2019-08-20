import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  persons =[
    { name : 'Francesco Saverio',
    surname: 'Comisso',
    title: 'Computer Scientist',
    bio : ''},
    {name : 'Francesco Saverio',
    surname: 'Comisso',
    title: 'Computer Scientist',
    bio : ''}]

  

  constructor() { }

  ngOnInit() {
  }

}