import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { Issue } from 'src/app/models/Issue';
import { LoginService } from 'src/app/MyServices/login.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent implements OnInit {

  issue = new Book();
  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }

  public issueBook(){
    console.log("hello from issue book");
    this.loginService.issueBook(this.issue).subscribe(
      data => {
        console.log("successs");
      }
    );
  }

}
