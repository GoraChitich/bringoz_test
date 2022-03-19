import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Driver} from './interfaces'

@Injectable({
  providedIn: 'root'
})
export class ListDriversService {

  constructor(private http: HttpClient) { }
  //getting handle to json with drivers
  getList(): Observable<Driver[]>{
    return this.http.get<Driver[]>('http://localhost:8080/assets/users.json');
  }
}
