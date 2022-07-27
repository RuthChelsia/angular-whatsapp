export class NewUsers {

    constructor(public users: User[]) {

    }

}

export class User {

    constructor(public email: string, public password: string) {
    }

}

export class MessageList {
    constructor(
        public email: string,
        public name: string,
        public profilePic: string,
        public senders: Sender[],
    

    ) {
    }
}

export class Sender{
     constructor(
        public name:string,
        public displayPic:string,
        public chats:string[],
     ){

     }

}

export class MessageLists{
    constructor(public messageList:MessageList[]){
    }
  }


//   export class Messages{
//     constructor(public po:Post[]){
//     }
//   }

