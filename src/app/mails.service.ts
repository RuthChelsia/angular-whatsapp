import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './data';

@Injectable({
  providedIn: 'root'
})
export class MailsService {

  users: BehaviorSubject<User[]>;
  users$: Observable<User[]>;
  constructor(public httpClient: HttpClient) {
    this.users = new BehaviorSubject<User[]>([]);
    this.users$ = this.users.asObservable();
  }

  public getUsers(): Observable<User[]> {

    return this.httpClient.get<User[]>("https://whatsapp-c6213-default-rtdb.firebaseio.com/users.json");
  }
}

