export class Login {
    user_name:String;
    password:String;
    source:String;
    constructor(obj) {
        if (obj.email != '' && obj.password != undefined) {
            this.user_name = obj.email
          }
          if (obj.email != '' && obj.password != undefined) {
            this.password = obj.password
          }
          this.source = "web"
    }
    
}
