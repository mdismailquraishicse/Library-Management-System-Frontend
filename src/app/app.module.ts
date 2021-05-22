import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./MyComponents/login/login.component";
import { HomeComponent } from './MyComponents/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './MyComponents/header/header.component';
import { AddbookComponent } from './MyComponents/addbook/addbook.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { DeletebookComponent } from './MyComponents/deletebook/deletebook.component';
import { ViewbookComponent } from './MyComponents/viewbook/viewbook.component';
import { IssuebookComponent } from './MyComponents/issuebook/issuebook.component';
import { ReturnbookComponent } from './MyComponents/returnbook/returnbook.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AddbookComponent,
    FooterComponent,
    DeletebookComponent,
    ViewbookComponent,
    IssuebookComponent,
    ReturnbookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
