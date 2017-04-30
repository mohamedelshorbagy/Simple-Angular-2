import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-card',
  templateUrl: './third-card.component.html',
  styleUrls: ['./third-card.component.css']
})
export class ThirdCardComponent implements OnInit {
        thirdProductTitle = "Third Prodcut";
        thirdProductPraragraph = "This is Third Product";
        thirdProductImage = "/product.jpg";


  constructor() { }

  ngOnInit() {
  }

}
