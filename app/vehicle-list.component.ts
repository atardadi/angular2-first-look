import {Component, OnInit} from 'angular2/core';
import {Vehicle, VehicleService} from './vehicle.service';
import {VehicleComponent} from './vehicle.component';

@Component({
	selector: 'my-vehicle-list',
	templateUrl: 'app/vehicle-list.template.html',
	directives: [VehicleComponent],
	providers: [VehicleService]
})
export class VehicleListComponent implements OnInit{
	private selectedVehicle: Vehicle;
	private vehicles: Promise<Vehicle[]>;
	private messages: string[] = [];

	constructor(private _VehicleService: VehicleService){}

	ngOnInit() {
		this.getVehicles(); 
	}

	getVehicles() {
		this.vehicles = this._VehicleService.getVehicles();
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