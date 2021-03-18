import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbarmenu',
  templateUrl: './navbarmenu.component.html',
  styleUrls: ['./navbarmenu.component.scss']
})
export class NavbarmenuComponent implements OnInit {

  public navlinks: any[] = [
    {link: 'gallery', label: 'Gallery'},
    {link: 'diy', label: 'DIY'},
    {link: 'about', label: 'About'}
  ];

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

}
