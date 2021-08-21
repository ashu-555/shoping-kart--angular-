import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componenet/dashboard/dashboard.component';
import { MycartComponent } from './componenet/mycart/mycart.component';
import { SearchproductComponent } from './componenet/searchproduct/searchproduct.component';

const routes: Routes = [
  {path:'dash',component:DashboardComponent},
  {path:'mycart',component:MycartComponent},
  {path:'search',component:SearchproductComponent},
  {path:'',redirectTo:'dash',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
