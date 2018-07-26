import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductListService} from '../product-list.service'


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProductListService]
})
export class DetailComponent implements OnInit {
  produto: any = {name:''}
  id: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private service: ProductListService 
  ) {}

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      console.log(params.id)
      this.id = params.id
      
      this.produto = this.service.getOneProduct(this.id)
      console.log(this.produto)
    })
//query
    this.activeRoute.queryParams
    .subscribe(query=>{
      console.log(query)
    })

  }

}
