import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductListService} from '../product-list.service'
import {PhoneService} from '../services/phones.service'


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  produto: any = {name:''}
  id: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private service: ProductListService ,
    private phoneService: PhoneService
  ) {}

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      console.log(params.id)
      this.id = params.id
      
      this.phoneService.getOnePhone(this.id)
      .subscribe(phone=>{
  //      console.log(phone)
        this.produto = phone
      })
    })
//query
    this.activeRoute.queryParams
    .subscribe(query=>{
      console.log(query)
    })

  }

}
