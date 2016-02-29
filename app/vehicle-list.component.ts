import {Component, OnInit} from 'angular2/core';
import {Vehicle, VehicleService} from './vehicle.service';
import {VehicleComponent} from './vehicle.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'my-vehicle-list',
	templateUrl: 'app/vehicle-list.template.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [VehicleService]
})
export class VehicleListComponent implements OnInit{
	private selectedVehicle: Vehicle;
	private vehicles: Vehicle[] = [];
	private messages: string[] = [];

	constructor(private _VehicleService: VehicleService){}

	ngOnInit() {
		this.getVehicles(); 
	}

	getVehicles() {
		this._VehicleService.getVehicles()
				.subscribe(vehicles => this.vehicles = vehicles);
	}

	clear() {
		this.selectedVehicle = null; 
	}

	log(msg: string) {
		this.messages.splice(0, 0, msg);
		console.log(msg);
	}

	private selectVehicle(toSelect: Vehicle) {
		this.selectedVehicle = toSelect;
	}
}