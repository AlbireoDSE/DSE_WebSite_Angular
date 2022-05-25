import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit {

  equipmentList: any[] = [
    {equipName: "elem", equipType: "Telescope"},
    {equipName: "elem2", equipType: "Telescope"},
    {equipName: "elem1", equipType: "Telescope"},
    {equipName: "elem2", equipType: "Telescope"},
    {equipName: "elem1", equipType: "Telescope"},
    {equipName: "elem2", equipType: "Telescope"},
    {equipName: "elem1", equipType: "Telescope"},
    {equipName: "elem2", equipType: "Telescope"},
    {equipName: "elem1", equipType: "Telescope"},
    {equipName: "elem2", equipType: "Telescope"},
    {equipName: "elem1", equipType: "Telescope"},
    {equipName: "elem2", equipType: "Telescope"},  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
