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
  file: any

  constructor(
    private phoneService: PhoneService,
    private router: Router
  ) { }

  saveProduto(){
    this.produto.specs = this.produto.specs.split(',')

    const form = new FormData()
    for(let k in this.produto){
      form.append(k, this.produto[k])
    }
    form.append('image', this.file)

    this.phoneService.createPhone(form)
    .subscribe(p=>{
      this.router.navigate(['products'])
    })
  }

  getFile(e){
    this.file = e.target.files[0]
  }

  ngOnInit() {
  }

}
