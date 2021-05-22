import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { LoginService } from 'src/app/MyServices/login.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  book = new Book();
  msg : string;
  constructor(private loginServive : LoginService) { }

  ngOnInit(): void {
  }

  public addBook(){
    console.log("working...");
    this.loginServive.addBook(this.book).subscribe(
      (data) => {
        if(data === 1)
        console.log("successfuly added");
        if(this.book.bid !== undefined){
          this.msg = 'Sucessfully added';

        }
        else
        this.msg = 'invalid data';
      }
    );
  }

}
