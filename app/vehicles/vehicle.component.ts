import {Component, Input, OnInit} from 'angular2/core';
import {VehicleService, Vehicle} from './vehicle.service';
import {RouteParams} from 'angular2/router';

@Component({
	selector: 'my-vehicle',
	templateUrl: 'app/vehicles/vehicle.template.html',
	providers: [VehicleService]
})
export class VehicleComponent implements OnInit{
	@Input() vehicle: Vehicle;

	constructor(
		private _routeParams: RouteParams,
		private _vehicleService: VehicleService) {}

	ngOnInit() {
		if (!this.vehicle) {
			let id = +this._routeParams.get('id');
			this._vehicleService.getVehicle(id)
				.subscribe((vehicle: Vehicle) => this.vehicle = vehicle)
		}
	}
}