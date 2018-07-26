import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs'
//import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  
  url = "https://swapi.co/api/people/"

  constructor(private http:Http) { }

  getCharacters(){
    return this.http.get(this.url).toPromise()
      .then((res: Response)=>res.json())
  }

  getObservableCharacter(): Observable<string>{
    return this.http.get(this.url)
    .pipe(map((res:Response)=>res.json()))
    
  }

}
