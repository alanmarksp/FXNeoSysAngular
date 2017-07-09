import {Injectable} from "@angular/core";
import {Authentication} from "../../models/authentication.model";
import {Headers, Http, RequestOptions} from "@angular/http";

import {AppSettings} from "../../app-settings";

@Injectable()
export class AuthenticateService {

    headers = new Headers({'Content-Type': 'application/json'});
    options = new RequestOptions({headers: this.headers, withCredentials: true});

    constructor(private http: Http) {
    }

    public login(authentication: Authentication) {
        return this.http
            .post(AppSettings.API_ENDPOINT + '/authentications/login/', authentication, this.options)
            .map(value => value.json())
    }

    public register(authentication: Authentication) {
        return this.http
            .post(AppSettings.API_ENDPOINT + '/authentications/register/', authentication, this.options)
            .map(value => value.json())
    }
}