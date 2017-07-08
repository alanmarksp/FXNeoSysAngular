import {Authentication} from "../../models/authentication.model";
import {Response, ResponseOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

export class MockAuthenticateService {
    private traderUsername: string = 'trader';
    private traderPassword: string = 'trader_password';

    public login(authentication: Authentication): Observable<Response> {
        return new Observable<Response>((subscriber: any) => {
            if (authentication['username'] == this.traderUsername &&
                authentication['password'] == this.traderPassword) {
                subscriber.next(new Response(
                    new ResponseOptions({
                        body: [
                            {
                                token: 'test_token'
                            }
                        ]
                    }))
                )
            }
            else {
                subscriber.error()
            }
            subscriber.complete();
        });
    }

    public register(authentication: Authentication): Observable<Response> {
        return new Observable<Response>((subscriber: any) => {
            if (authentication['username'] != this.traderUsername) {
                subscriber.next(new Response(
                    new ResponseOptions({
                        body: [
                            {
                                token: 'test_token'
                            }
                        ]
                    }))
                )
            }
            else {
                subscriber.error()
            }
            subscriber.complete();
        });
    }
}