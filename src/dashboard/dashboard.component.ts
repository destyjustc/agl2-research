import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { HeroesComponent } from '../heroes.component';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/components/demo/dashboard.component.html',
  styleUrls: ['app/components/demo/dashboard.component.less'],
  directives: [HeroesComponent]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private _router: Router,
    private _heroService: HeroService) {
  }

  ngOnInit() {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }
}
