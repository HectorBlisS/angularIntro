import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class PhoneService{
    url = "http://localhost:3000/phones/"
    constructor(private http:Http){}

    //get all phones
    getAllPhones(){
        return this.http.get(this.url).toPromise()
        .then((res: Response)=> res.json())
        .catch(e=>console.log(e))                        
    }
    //get one phone
    getOnePhone(id){
        return this.http.get(this.url + id)
            .pipe(map((res: Response)=>res.json()));                                
    }

    //create one phone
    createPhone(obj){
        return this.http.post(this.url, obj)
            .pipe(map((res: Response)=>res.json()))                                                             
    }    
        
    //edit one phone
    editOnePhone(obj){
    return this.http.put(this.url + obj._id, obj) 
        .pipe(map((res: Response)=>res.json()))    

    }    

    //delete one phone richard
    deletePhone(id){
        return this.http.delete(this.url + id)
            .pipe(map((res: Response)=>res.json()))                                                                


    }    
    

}