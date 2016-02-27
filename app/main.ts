import {bootstrap} from 'angular2/platform/browser';
// import {StoryComponent} from './story.component.js';
// import {VehiclesComponent} from './vehicles.component.js';
import {AppComponent} from './app.component.js';

bootstrap(AppComponent)
	.then(success => console.log('Success'))
	.catch(error => console.warn(error));