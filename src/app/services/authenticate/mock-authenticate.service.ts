import {Authentication} from "../../models/authentication.model";
import {Response, ResponseOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

export class MockAuthenticateService {
    private trader_username: string = 'trader';
    private trader_password: string = 'trader_password';

    public login(authentication: Authentication): Observable<Response> {
        return new Observable<Response>((subscriber: any) => {
            if (authentication.getUsername() == this.trader_username &&
                authentication.getPassword() == this.trader_password) {
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
            subscriber.next(new Response(
                new ResponseOptions({
                    body: [
                        {
                            token: 'test_token'
                        }
                    ]
                }))
            )
        });
    }
}