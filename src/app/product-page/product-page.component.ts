import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ProductListService} from '../product-list.service'
import {SwapiService} from '../services/swapi.service'
import {PhoneService} from '../services/phones.service'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
  //esto ya no

})
export class ProductPageComponent implements OnInit {
  produtos: Array<any>
  characters: Array<any>
  phones: Array<any>
  constructor(
      private router: Router,
      private service: ProductListService,
      private swapi: SwapiService,
      private phoneService: PhoneService
    ){}

  

  showProduct(produto){
    console.log(produto)
  }

  ngOnInit() {
    this.phoneService.getAllPhones()
    .then(phones=>{
      this.phones = phones
    })

  }


}
