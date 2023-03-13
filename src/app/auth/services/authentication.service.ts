import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserCredentials } from '../model/UserCredentials';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiServerUrl="http://ejemplo"
  constructor(private http:HttpClient) { }

  public loginUser(uc:UserCredentials):Observable<HttpResponse<Object>>
  {
    return this.http.post<HttpResponse<Object>>(`${this.apiServerUrl}/new`,uc);
  }

}
