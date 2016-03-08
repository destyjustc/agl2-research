import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {DashboardComponent} from '../dashboard/dashboard.component';
import {SearchComponent} from '../search/search.component';
import {EventReviewComponent} from '../event-review/event-review.component';
import {AssetInvestigationComponent} from '../asset-investigation/asset-investigation.component';
import {NameList} from '../common/services/name-list.service';

@Component({
  selector: 'app',
  viewProviders: [NameList],
  moduleId: module.id,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/dashboard', component: DashboardComponent, name: 'Dashboard', useAsDefault: true },
  { path: '/search', component: SearchComponent, name: 'Search' },
  { path: '/eventReview', name: 'EventReview', component: EventReviewComponent },
  { path: '/assetInvestigation', name: 'AssetInvestigation', component: AssetInvestigationComponent },
])
export class AppComponent {}
