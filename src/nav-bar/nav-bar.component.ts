import {Component} from 'angular2/core';
import {
	ROUTER_DIRECTIVES
} from 'angular2/router';

@Component({
	selector: 'app-selector-nav-bar',
	templateUrl: 'nav-bar/nav-bar.html',
	styleUrls: ['nav-bar/nav-bar.css'],
	directives: [ROUTER_DIRECTIVES]
})

export class NavBarComponent { }
