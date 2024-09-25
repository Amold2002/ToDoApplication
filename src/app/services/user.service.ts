import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _http: HttpClient) {}

  addUser(data: any): Observable<any> {
    return this._http.post('https://json-server-b4a8.onrender.com/users', data);
  }

  updateUser(id: number, data: any): Observable<any> {
    return this._http.put(`https://json-server-b4a8.onrender.com/users/${id}`, data);
  }

  getUserList(): Observable<any> {
    return this._http.get('https://json-server-b4a8.onrender.com/users');
  }

  deleteUser(id: number): Observable<any> {
    return this._http.delete(`https://json-server-b4a8.onrender.com/users/${id}`);
  }
}
