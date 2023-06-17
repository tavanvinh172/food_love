import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = environment.baseUrl + 'api/persons';
  
  constructor(private http: HttpClient) { }

  loginUser(person: Person):Observable<any>{
    var requestHeaders = new HttpHeaders();
    let url = this.baseUrl + '/login'
    return this.http.post<string>(url, person, {headers: requestHeaders, responseType: "json" });
  }

  getCurrentUser():Observable<Person[]>{
    return this.http.get<Person[]>(this.baseUrl);    
  }
}
