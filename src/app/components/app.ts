import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {HomeCmp} from '../../home/components/home';
import {AboutCmp} from '../../about/components/about';
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
  { path: '/dashboard', component: HomeCmp, name: 'Dashboard', useAsDefault: true },
  { path: '/search', component: AboutCmp, name: 'Search' },
  { path: '/eventReview', name: 'EventReview', component: EventReviewCmp },
  { path: '/assetInvestigation', name: 'AssetInvestigation', component: AssetInvestigationCmp },
])
export class AppCmp {}
