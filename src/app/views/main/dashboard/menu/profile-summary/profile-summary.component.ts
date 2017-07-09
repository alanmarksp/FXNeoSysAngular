import {Component, OnInit} from "@angular/core";
import {ShowDashboardService} from "../../../../../services/show-dashboard/show-dashboard.service";
import {Router} from "@angular/router";
import {Trader} from "../../../../../models/trader.model";

@Component({
    selector: 'profile-summary',
    templateUrl: './profile-summary.component.html',
    styleUrls: ['./profile-summary.component.css']
})
export class ProfileSummaryComponent implements OnInit {
    private username: string;
    private email: string;

    constructor(private showDashboardService: ShowDashboardService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.showDashboardService
            .getProfile()
            .subscribe(
                value => this.getProfileSuccess(value),
                error => this.getProfileFailure()
            )
    }

    private getProfileSuccess(trader: Trader) {
        this.username = trader.getUsername();
        this.email = trader.getEmail();
    }

    private getProfileFailure() {
        this.router.navigate(['/authentication/login'])
    }
}