import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {NameList} from '../../services/name_list';

@Component({
  selector: 'about',
  styles: [
    `
      ul li a {
        color:blue;
        cursor:pointer;
      }
    `
  ],
  templateUrl: './components/about/about.html',
  directives: [CORE_DIRECTIVES]
})
export class About {
  constructor(public list: NameList) {}
  addName(newname): boolean {
    this.list.add(newname.value);
    newname.value = '';
    // prevent default form submit behavior to refresh the page
    return false;
  }
}
