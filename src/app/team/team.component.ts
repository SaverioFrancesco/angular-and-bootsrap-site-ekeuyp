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
    bio : '',
    emails:['mitramdhir@gmail.com','francesco.sav.comisso@gmail.com'],
    phone: '+39...',
    cv:''
    },
    {name : 'Francesco Saverio',
    surname: 'Comisso',
    title: 'Computer Scientist',
    bio : ''}]

  constructor() { }

  ngOnInit() {
  }

}