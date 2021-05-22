import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/MyServices/login.service';

@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent implements OnInit {

  bid : number;
  msg : string;
  constructor( private loginService : LoginService) { }

  ngOnInit(): void {
  }

  public returnBook(){
    console.log("book has been returned...");
    this.loginService.returnBook(this.bid).subscribe(
      data => {
        console.log("successfully returned");
        this.msg = "The book has been returned";
      }
    );
  }

}
