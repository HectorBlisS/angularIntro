import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {ProductListService} from '../product-list.service'
import {PhoneService} from '../services/phones.service'
 
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id:string
  produto: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductListService,
    private router: Router,
    private phoneService : PhoneService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.parent.snapshot.params.id
    this.phoneService.getOnePhone(this.id)
    .subscribe(phone=>{
      this.produto = phone
    })
  }

  saveProduto(){
    if(!window.confirm('Estas seguro?')) return
    this.phoneService.editOnePhone(this.produto)
    .subscribe(()=>{
     this.router.navigate(['products'])
    })
    
  }

  removePhone(id){
    this.phoneService.deletePhone(id)
    .subscribe(()=>{
      this.router.navigate(['products'])
    })
  }

}
