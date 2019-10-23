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
    return this.httpClient.get('http://localhost/index.php');
  }
  public postData( forms: FormsComponent) {
    return this.httpClient.post('http://localhost/index.php', forms);
  }
}
