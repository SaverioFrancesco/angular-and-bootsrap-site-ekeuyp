import { Component, OnInit } from '@angular/core';
import { team } from '../persons';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  persons=team;

  constructor() { }

  ngOnInit() {
  }

}