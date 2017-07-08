import {Component} from "@angular/core";
import {AuthenticateService} from "../../../services/authenticate/authenticate.service";
import {Authentication} from "../../../models/authentication.model";
import {Router} from "@angular/router";
import {MdSnackBar} from "@angular/material";

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private authenticateService: AuthenticateService,
                private router: Router,
                private snackBar: MdSnackBar) {
    }

    login(username: string, password: string) {
        const authentication = new Authentication(username, password);
        if (username != '' && password != '') {
            this.authenticateService
                .login(authentication)
                .subscribe(
                    value => this.loginSuccess(),
                    error => this.loginFailure()
                )
        }
        else {
            this.showSnackBar('You must fill all fields')
        }
    }

    private loginSuccess() {
        this.router
            .navigate(['/'])
    }

    private loginFailure() {
        this.showSnackBar('Incorrect username or password')
    }

    private showSnackBar(message: string) {
        this.snackBar.open(message, null, {
            duration: 2000
        })
    }
}