import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { LoginService } from 'src/app/MyServices/login.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  myData;
  
  constructor( private loginService : LoginService) { }

  ngOnInit(): void {
    this.loginService.getAllBooks().subscribe(
      (data) => {
        var i;
        this.myData = data;
        for( i = 0 ; i<this.myData.length; i++){

          if(this.myData[i].bissue == null){
            this.myData[i].bissue = '-';
            this.myData[i].breturn = '-';
            this.myData[i].brollno = '-';
          }
        }
 
      }
    );
  }

}
