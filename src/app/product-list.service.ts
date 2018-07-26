import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  
  constructor() { }

  produtos: Array<any> = [
    {
      _id:0,
      name: "Taza",
      price: 123,
      desc: "Sirve pa tomar café",
      pic: ''
    },
    {
      _id:1,
      name: "Mesa",
      price: 788,
      desc: "Sirve pa tomar café",
      pic: ''
    },
    {
      _id:2,
      name: "Silla",
      price: 999,
      desc: "Sirve pa tomar café",
      pic: ''
    },
    {
      _id:3,
      name: "Leche",
      price: 123,
      desc: "Sirve pa tomar café... ",
      pic: ''
    },
  ]

  getList(){
    return this.produtos
  }
  
  getOneProduct(id){
    return this.produtos.find(p=>p._id == id)
  }
  
}
