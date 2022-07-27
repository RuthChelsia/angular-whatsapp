import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageList, Sender } from '../data';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {
   @Input()
  // isActive: boolean = false;
  // Active: boolean= false;
   messageList:MessageList[]=[]
   senders:Sender[]=[]

 
      constructor(public messagesService: MessagesService,public  router:Router,public activatedroute: ActivatedRoute) {
        this.messagesService.fetchPosts().subscribe((messagelist:MessageList[])=>{
          this.messageList=messagelist;
        })
       }

  ngOnInit(): void {
  }
   onClick(sender:Sender):void{

    this.router.navigate(['home',sender.name]);
   }

}
