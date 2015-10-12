import {
  AsyncTestCompleter,
  TestComponentBuilder,
  describe,
  expect,
  inject,
  it
} from 'angular2/test_lib';
import {Component, View} from 'angular2/angular2';
import {DOM} from 'angular2/src/core/dom/dom_adapter';
import {About} from './about';
import {NameList} from '../../services/name_list';

export function main() {
  describe('About component', () => {
    it('should work',
      inject([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
        tcb.overrideTemplate(TestComponent, '<div><about></about></div>')
          .createAsync(TestComponent)
          .then((rootTC) => {
            rootTC.detectChanges();

            let aboutInstance = rootTC.debugElement.componentViewChildren[0].componentInstance;
            let aboutDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;
            let nameListLen = function () {
              return aboutInstance.list.names.length;
            };

            expect(aboutInstance.list).toEqual(jasmine.any(NameList));
            expect(nameListLen()).toEqual(4);
            expect(DOM.querySelectorAll(aboutDOMEl, 'li').length).toEqual(nameListLen());

            aboutInstance.addName({value: 'Minko'});
            rootTC.detectChanges();

            expect(nameListLen()).toEqual(5);
            expect(DOM.querySelectorAll(aboutDOMEl, 'li').length).toEqual(nameListLen());

            expect(DOM.querySelectorAll(aboutDOMEl, 'li')[4].textContent).toEqual('Minko');

            async.done();
          });
      }));
  });
}

@Component({bindings: [NameList], selector: 'test-cmp'})
@View({directives: [About]})
class TestComponent {}
