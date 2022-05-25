import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  val: number;

  toolsList: any[] = [
    {toolName: "Calculators", faIcon: "calculator", link: "calculators"},
    {toolName: "Astrometry", faIcon: "", link: "astrometry"},
    {toolName: "Planetarium", icon: "", link: "planetarium"},
  ]

  //icons
  //faCalculator = faCalculator; //renommer la partie de gauche pour le nom dans la balise HTML 

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  onToolClick(toolLink: string): void {
    this.router.navigate(['tools', toolLink]);
  }

}
