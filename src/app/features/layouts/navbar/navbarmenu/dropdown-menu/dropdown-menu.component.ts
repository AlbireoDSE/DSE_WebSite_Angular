import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  @Input()
  public dropnavLinks: any[];

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  public onLinkClick(link: string){
    this.router.navigate([link]); //doesn't work currently ^^'
  }

}
