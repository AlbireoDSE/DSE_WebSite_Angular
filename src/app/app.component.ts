import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private titleService: Title, private primengConfig: PrimeNGConfig){
    
  }

  ngOnInit(): void{
    this.titleService.setTitle("Deep Sky Encounter astrophotography");
    this.primengConfig.ripple = true;
  }
}
