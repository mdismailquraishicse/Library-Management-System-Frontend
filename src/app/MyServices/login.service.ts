import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Admin } from '../models/Admin';
import { Book } from '../models/Book';
import { Issue } from '../models/Issue';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  adminUrl : string = "http://localhost:8080/api/v1/lms/validate";
  bookUrl : string = 'http://localhost:8080/api/v1/lms/book';
  constructor(private _http : HttpClient) { }

  public getAdmin():Observable<Admin>{
    return this._http.get<Admin>(this.adminUrl);
  }

  public validateAdmin(admin : Admin):Observable<number>{
    return this._http.post<number>(this.adminUrl,admin);
  }

  public getAllBooks():Observable<any>{
    return this._http.get<any>(this.bookUrl);
  }

  public addBook(book : Book) :Observable<number>{
    return this._http.post<number>(this.bookUrl,book);
  }

  public deleteBook(bid : number) : Observable<number>{
    return this._http.delete<number>(this.bookUrl+'/'+bid);
  }

  public issueBook(issue : Book):Observable<number>{
      return  this._http.put<number>(this.bookUrl+"/"+issue.brollno,issue);
  }

  public returnBook(bid : number):Observable<number>{
    return this._http.post<number>(this.bookUrl+"/"+bid,bid);
  }


}
