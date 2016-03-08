import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {SearchComponent} from './search';
import {NameList} from '../../shared/services/name_list';


export function main() {
  describe('Search component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then(rootTC => {
            rootTC.detectChanges();

            let searchInstance = rootTC.debugElement.children[0].componentInstance;
            let searchDOMEl = rootTC.debugElement.children[0].nativeElement;
            let nameListLen = function () {
              return searchInstance.list.names.length;
            };

            expect(searchInstance.list).toEqual(jasmine.any(NameList));
            expect(nameListLen()).toEqual(4);
            expect(DOM.querySelectorAll(searchDOMEl, 'li').length).toEqual(nameListLen());

            searchInstance.newName = 'Minko';
            searchInstance.addName();
            rootTC.detectChanges();

            expect(nameListLen()).toEqual(5);
            expect(DOM.querySelectorAll(searchDOMEl, 'li').length).toEqual(nameListLen());

            expect(DOM.querySelectorAll(searchDOMEl, 'li')[4].textContent).toEqual('Minko');
          });
      }));
  });
}

@Component({
  providers: [NameList],
  selector: 'test-cmp',
  template: '<search></search>',
  directives: [SearchComponent]
})
class TestComponent {}
