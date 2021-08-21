import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restapimodel} from'../share/restapimodel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http :HttpClient) { }


  getproduct(){
    return this.http.get('https://fakestoreapi.com/products')
    .pipe(map((res:any)=>{
      return res
    }))
  }
}
