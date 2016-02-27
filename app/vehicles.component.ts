import {Component} from 'angular2/core';

@Component({
	selector: 'my-vehicles',
	templateUrl: 'app/vehicles.template.html'
})
export class VehiclesComponent {
	vehicles = [
		{ id: 1, name: 'X-something'},
		{ id: 2, name: 'Y-something' },
		{ id: 3, name: 'Z-something' }
	];
}
