import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  @Input()
  public dropnavLinks: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
