import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {NameList} from '../../shared/services/name_list';

@Component({
  selector: 'about',
  moduleId: module.id,
  templateUrl: './about.html',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class AboutCmp {
  newName: string;
  constructor(public list: NameList) {}

  addName(): boolean {
    this.list.add(this.newName);
    this.newName = '';
    return false;
  }
}
