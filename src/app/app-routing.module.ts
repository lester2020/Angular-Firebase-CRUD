import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdduserComponent } from './adduser/adduser.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'adduser/:id', component: AdduserComponent},
  { path: 'adduser', component: AdduserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
