import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {ProductListService} from '../product-list.service'
 
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
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.parent.snapshot.params.id
    this.produto = this.service.getOneProduct(this.id)
  }

  saveProduto(){
    if(!window.confirm('Estas seguro?')) return
    this.service.updateProduct(this.produto)
    .then(()=>{
     // this.router.navigate(['products'])
     alert('listo')
    })
    
  }

}
