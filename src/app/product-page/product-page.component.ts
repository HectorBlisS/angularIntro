import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ProductListService} from '../product-list.service'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
  //esto ya no

})
export class ProductPageComponent implements OnInit {
  produtos: Array<any>
  constructor(
      private router: Router,
      private service: ProductListService
    ){}

  

  showProduct(produto){
    console.log(produto)
  }

  ngOnInit() {
    this.produtos = this.service.getList()
  }


}
