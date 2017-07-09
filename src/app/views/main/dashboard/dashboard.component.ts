import {Component} from "@angular/core";
import {ShowDashboardService} from "../../../services/show-dashboard/show-dashboard.service";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard-component.css'],
    providers: [
        ShowDashboardService
    ]
})
export class DashboardComponent {
}