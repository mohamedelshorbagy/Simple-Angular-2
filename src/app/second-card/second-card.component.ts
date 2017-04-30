import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-card',
  templateUrl: './second-card.component.html',
  styleUrls: ['./second-card.component.css']
})
export class SecondCardComponent implements OnInit {
      secondProductTitle = "Second Product";
      secondProductParagraph = "This is the Second Prodcut";
      secodnProdcutImage = "image2.png";

  constructor() { }

  ngOnInit() {
  }

}
