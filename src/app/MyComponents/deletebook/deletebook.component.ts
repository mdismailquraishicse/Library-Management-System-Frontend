import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/MyServices/login.service';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {

  bid: number;
  msg;

  constructor( private loginService : LoginService) { }

  ngOnInit(): void {
  }

  public deleteBook(){
    console.log("preDelete works");
    this.loginService.deleteBook(this.bid).subscribe(
      data => {
        if(data === 1)
        this.msg = "Successfully deleted"
        else
        console.log('Invalid Book id number');
      },
      error => {console.log(error);}
    );

  }

}
