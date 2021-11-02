import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss']
})
export class GalleryCardComponent implements OnInit {

  public picture: HTMLImageElement;
  public title: string;
  public likesCounter: number;
  public viewsCounter: number;
  public hasAstrometry: boolean;

  constructor() { }

  ngOnInit(): void {
    this.title = "titre de la photo";
    this.likesCounter = 150;
    this.viewsCounter = 30541;
    this.hasAstrometry = true;
  }

}
