import {Component} from 'angular2/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.template.html',
	styleUrls: ['app/app.component.css']
})
export class AppComponent {
	private title: string;
	private imagePath: string = '//www.playalong.io/images/plyIcon.9d8785c6.png';
	private messages: string[] = [];

	constructor() {
		this.title = 'Angular 2 Events';
	}

	log(msg: string, data: string) {
		if (!!data) {
			console.log(data);
		}
		this.messages.splice(0, 0, msg);

	}
}
