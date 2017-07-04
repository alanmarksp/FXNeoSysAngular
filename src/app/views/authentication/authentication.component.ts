import {Component} from "@angular/core";
import {AuthenticateService} from "../../services/authenticate/authenticate.service";

@Component({
    selector: 'authentication',
    templateUrl: './authentication.component.html',
    providers: [
        AuthenticateService
    ]
})
export class AuthenticationComponent {
}