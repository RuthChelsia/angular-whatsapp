import { Component, Input, OnInit } from '@angular/core';
import { MessageList, Sender } from '../data';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{
  sender?:Sender;
   @Input() 
   public senders?:Sender[]=[];
//   senders!: string ;
//   route: any;

 public  name?:string;
  

  constructor(public activatedroute: ActivatedRoute){}

  ngOnInit():void{
    this.activatedroute.params.subscribe((params:Params)=>{this.name=params?.['sender']});
    // this.route.paramMap.subscribe((params : ParamMap)=> {  
    //   this.name=params.get('sender');  
    
   // this.senders = this.activatedroute.snapshot.paramMap.get('sender'); 
  }
    

}

