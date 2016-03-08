import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {DashboardComponent} from '../../dashboard/components/dashboard';
import {SearchComponent} from '../../search/components/search';
import {EventReviewCmp} from '../../event-review/components/event-review';
import {AssetInvestigationCmp} from '../../asset-investigation/components/asset-investigation';
import {NameList} from '../../shared/services/name_list';

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
  { path: '/eventReview', name: 'EventReview', component: EventReviewCmp },
  { path: '/assetInvestigation', name: 'AssetInvestigation', component: AssetInvestigationCmp },
])
export class AppComponent {}
