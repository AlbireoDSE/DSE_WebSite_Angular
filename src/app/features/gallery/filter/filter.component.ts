import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public filterForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.InitForm();
  }

  private InitForm(): void{
    this.filterForm = new FormGroup({
      name: new FormControl('')
    });
  }

}
