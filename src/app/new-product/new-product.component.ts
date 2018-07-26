import { Component, OnInit } from '@angular/core';
import {PhoneService} from '../services/phones.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  produto: any = {}

  constructor(
    private phoneService: PhoneService,
    private router: Router
  ) { }

  saveProduto(){
    this.produto.specs = this.produto.specs.split(',')
    this.phoneService.createPhone(this.produto)
    .subscribe(p=>{
      this.router.navigate(['products'])
    })
  }

  ngOnInit() {
  }

}
