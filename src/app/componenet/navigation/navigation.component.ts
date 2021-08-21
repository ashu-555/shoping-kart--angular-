import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, debounce, debounceTime, distinctUntilChanged, map, shareReplay, switchMap } from 'rxjs/operators';
import { CartService } from 'src/app/share/cart.service';
import { SearchapiService } from 'src/app/share/searchapi.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
 public badgenumber :number =0;
 public searchproduct : string='';
 public loading! :boolean;
 public searchterm = new Subject<any>();
 public paginationElements :any;
 public errormessage :any

 public searchform = new FormGroup({
   search :new FormControl("",Validators.required)
 });

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  searchResults: any;

  constructor(private breakpointObserver: BreakpointObserver,
              private numberservice :CartService,
              public api:SearchapiService) {}


  ngOnInit(): void {
    this.numberservice.gerproducts()
    .subscribe(res =>{
      this.badgenumber = res.length;
    })
 
  }

  searchData(){
      this.searchterm.pipe(map((a:any)=>{
      console.log(a.target.value);
      return a.target.value
    }),
    debounceTime(400),
    distinctUntilChanged(),
    switchMap(term =>{
      this.loading = true;
      return this.api.searchEntries(term);
    }),
    catchError((a) => {
      this.loading = false,
      this.errormessage =a.message;
      return throwError(a);
    }),
    ).subscribe(v=>{
      this.loading =true;
      this.searchResults =v;
      this.paginationElements =this.searchproduct;
    })
  

  }
}
function a(a: any) {
  throw new Error('Function not implemented.');
  
}

