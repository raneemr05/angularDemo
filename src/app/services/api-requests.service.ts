import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  // https://randomuser.me/api
  private readonly API_URL = "https://randomuser.me/api";

  constructor(private http: HttpClient) { 
  }

  // Fetch the data from the api using get request
  // retuns Observable - stream of values
  getRandomUser(): Observable<any>{
    return this.http.get(this.API_URL);

  }  
}
