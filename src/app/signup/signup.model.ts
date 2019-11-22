export class Signup {
    firstName: String;
    lastName: String;
    email: String;
    phone: String;
    password: String;
    confirmPassword: String;
    companyName: String;
    country: String;
    webUrl: String;
    constructor(obj) {
        if (obj.firstName != '') {
            this.firstName = obj.firstName
        }
        if (obj.lastName != '') {
            this.lastName = obj.lastName
        }
        if (obj.email != '') {
            this.email = obj.email
        }
        if (obj.phone != '') {
            this.phone = obj.phone
        }
        if (obj.password != '') {
            this.password = obj.password
        }
        if (obj.confirmPassword != '') {
            this.confirmPassword = obj.confirmPassword
        }
        if (obj.companyName != '') {
            this.companyName = obj.companyName
        }
        if (obj.country != '') {
            this.country = obj.country
        }
        if (obj.webUrl != '') {
            this.webUrl = obj.webUrl
        }



    }
}
