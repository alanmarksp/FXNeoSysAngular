import {Component} from "@angular/core";
import {AuthenticateService} from "../../../services/authenticate/authenticate.service";
import {Authentication} from "../../../models/authentication.model";
import {Router} from "@angular/router";
import {MdSnackBar} from "@angular/material";

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    constructor(private authenticateService: AuthenticateService,
                private router: Router,
                private snackBar: MdSnackBar) {
    }

    register(username: string, password: string, passwordConfirmation: string) {
        if (username != '' && password != '' && passwordConfirmation != '') {
            if (password == passwordConfirmation) {
                const authentication = new Authentication(username, password);
                this.authenticateService
                    .register(authentication)
                    .subscribe(
                        value => this.registerSuccess(),
                        error => this.registerFailure()
                    )
            }
            else {
                this.showSnackBar('Password and password confirmation must be the same')
            }
        }
        else {
            this.showSnackBar('You must fill all fields')
        }
    }

    registerSuccess() {
        this.router
            .navigate(['/']);
    }

    private registerFailure() {
        this.showSnackBar('Username already exists')
    }

    private showSnackBar(message: string) {
        this.snackBar.open(message, null, {
            duration: 2000
        })
    }
}