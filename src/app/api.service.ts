import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormsComponent} from './forms/forms.component';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient ) { }
  public getStudents() {
    return this.httpClient.get('/api/students');
  }
  public postData( name, login) {
    return this.httpClient.post('/api/students', {Name: name, Login: login});
  }
}
