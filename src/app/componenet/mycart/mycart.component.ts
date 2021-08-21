import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/share/cart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
 public cartproduct:any
 public grandtotal !:number;
  constructor( private cartservice : CartService) { }

  ngOnInit(): void {
    this.cartservice.gerproducts()
    .subscribe(res=>{
      this.cartproduct = res;
      this.grandtotal = this.cartservice.gettotalprice()
    })
  }
  delet(pd:any){
    this.cartservice.removecart(pd)
  }
  removeall(){
    this.cartservice.removeallcart()

  }

}
