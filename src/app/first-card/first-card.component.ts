import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-card',
  templateUrl: './first-card.component.html',
  styleUrls: ['./first-card.component.css']
})
export class FirstCardComponent implements OnInit {

      firstProductTitle = "First Product";
      firstProductParagraph = "This is the First Product in the Card";
      firstProductImage = "image1.png";

  constructor() { }

  ngOnInit() {
  }

}
