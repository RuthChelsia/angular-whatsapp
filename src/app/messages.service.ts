import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageList } from './data';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  
  constructor( private http: HttpClient) { }
  public fetchPosts():Observable<MessageList[]> {
    return this.http.get<MessageList[]>("https://whatsapp-c6213-default-rtdb.firebaseio.com/messageList.json");
  }
     public updatePosts(messageList: MessageList[]):void{
    this.http.put("https://whatsapp-c6213-default-rtdb.firebaseio.com/messageList.json",messageList).subscribe();
    this.fetchPosts();
  }
}
