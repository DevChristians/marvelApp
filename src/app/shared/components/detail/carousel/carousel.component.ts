import { Component, Input, OnInit } from '@angular/core';
import { CarouselObject } from '../../../models/interfaces/carousel-interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

  @Input() title: any;

  @Input() list: Array<CarouselObject> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
