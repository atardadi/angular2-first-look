import {Component} from 'angular2/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.template.html'
})
export class AppComponent {
	private title: string = 'Angular Ex';
	private story: {} = { name: 'Geeks' };
}
