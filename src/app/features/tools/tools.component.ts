import { Component, OnInit } from '@angular/core';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  val: number;

  //icons
  faCalculator = faCalculator; //renommer la partie de gauche pour le nom dans la balise HTML 

  constructor() { }

  ngOnInit(): void {
  }

}
