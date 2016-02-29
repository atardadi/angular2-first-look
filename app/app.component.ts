import {HTTP_PROVIDERS} from 'angular2/http';
import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import 'rxjs/Rx';

import {CharacterListComponent} from './character-list.component';
import {CharacterService} from './character.service';
import {VehicleService} from './vehicle.service';
import {VehicleListComponent} from './vehicle-list.component';
import {VehicleComponent} from './vehicle.component';
import {CONFIG} from './config';

@Component({
	selector: 'story-app',
	templateUrl: 'app/app.template.html',
	styles: [`
    nav ul {list-style-type: none;}
    nav ul li {padding: 4px;cursor: pointer;display:inline-block}
  `],
  directives: [ROUTER_DIRECTIVES],
	providers: [
		CharacterService,
		HTTP_PROVIDERS,
		ROUTER_PROVIDERS,
		VehicleService
	]
})

@RouteConfig([
	{ path: '/characters', name: 'Characters', component: CharacterListComponent},
	{ path: '/vehicles', name: 'Vehicles', component: VehicleListComponent },
	{ path: '/vehicle/:id', name: 'Vehicle', component: VehicleComponent }
])
export class AppComponent {
}
