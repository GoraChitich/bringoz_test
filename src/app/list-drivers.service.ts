import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import Driver from './driver.interface'
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListDriversService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Driver[]>{
    return this.http.get<Driver[]>('http://localhost:4200/assets/users.json');
  }
}
