import {Component, Input} from 'angular2/core';
import {VehicleService, Vehicle} from './vehicle.service';

@Component({
	selector: 'my-vehicle',
	templateUrl: 'app/vehicle.template.html',
	providers: [VehicleService]
})
export class VehicleComponent{
	@Input() private vehicle: Vehicle;
}
