import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './MyComponents/addbook/addbook.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { DeletebookComponent } from './MyComponents/deletebook/deletebook.component';
import { ViewbookComponent } from './MyComponents/viewbook/viewbook.component';
import { IssuebookComponent } from './MyComponents/issuebook/issuebook.component';
import { ReturnbookComponent } from './MyComponents/returnbook/returnbook.component';


const routes: Routes = [{path:'', component:LoginComponent},
                        {path:'home', component:HomeComponent},
                        {path:'addbook', component:AddbookComponent},
                        {path:'deletebook', component:DeletebookComponent},
                        {path:'viewbook', component:ViewbookComponent},
                        {path:'issuebook', component:IssuebookComponent},
                        {path:'returnbook', component:ReturnbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
