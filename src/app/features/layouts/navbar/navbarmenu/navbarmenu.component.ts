import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbarmenu',
  templateUrl: './navbarmenu.component.html',
  styleUrls: ['./navbarmenu.component.scss']
})
export class NavbarmenuComponent implements OnInit {

  public navlinks: any[] = [
    {link: 'gallery', label: 'Gallery', droplinks: 
      [
        {link: 'galaxies', label: 'Galaxies'}, 
        {link: 'nebulae', label: 'Nebulae'},
        {link: 'star-clusters', label: 'Star Clusters'},
        {link: 'interstellar-voyagers', label: 'Interstellar voyagers'},
        {link: 'moon', label: 'Moon'},
        {link: 'planets', label: 'Planets'},
        {link: 'stars', label: 'Stars'},
        {link: 'gear', label: 'Gear'},
        {link: 'others', label: 'Others...'},
      ]
    },
    {link: 'diy', label: 'DIY'},
    {link: 'tools', label: 'Tools', droplinks: 
      [
        {link: 'astrometry', label: 'Astrometry'},
        {link: 'calculators', label: 'Calculators'}
      ]
    },
    {link: 'gear', label: 'My gear'},
    {link: 'about', label: 'About'}
  ];

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  public onLinkClick(link: string): void {
    this.router.navigate([link]);
  }

  

}
