import {Injectable} from 'angular2/core'
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

export class Vehicle {
	constructor(public id: number, public name: string){}
}

@Injectable()
export class VehicleService{
	constructor(private _http: Http) {}

	public getVehicles() {
		return this._http.get('api/vehicles.json')
			.map((response: Response) => <Vehicle[]>response.json().data)
			.catch(this.handleError);
	}

	public getVehicle(id: number = -1) {
		return this.getVehicles()
			.map((vehicles => vehicles.find(vehicle => vehicle.id === id)));
	}

	handleError(error: Response) {
		return Observable.throw(error.json().error || 'Error');
	}
}