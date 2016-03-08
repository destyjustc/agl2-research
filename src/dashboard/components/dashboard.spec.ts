import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it,
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {DashboardComponent} from './dashboard';

export function main() {
  describe('Dashboard component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let dashboardDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(DOM.querySelectorAll(dashboardDOMEl, 'h1')[0].textContent).toEqual('Howdy!');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [DashboardComponent],
  template: '<dashboard></dashboard>'
})
class TestComponent { }
