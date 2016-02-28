import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import 'rxjs/Rx';

bootstrap(AppComponent)
	.then(success => console.log('Success'))
	.catch(error => console.warn(error));