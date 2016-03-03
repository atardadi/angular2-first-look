System.register(['angular2/core', './vehicle.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, vehicle_service_1, router_1;
    var VehicleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vehicle_service_1_1) {
                vehicle_service_1 = vehicle_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            VehicleComponent = (function () {
                function VehicleComponent(_routeParams, _vehicleService) {
                    this._routeParams = _routeParams;
                    this._vehicleService = _vehicleService;
                }
                VehicleComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.vehicle) {
                        var id = +this._routeParams.get('id');
                        this._vehicleService.getVehicle(id)
                            .subscribe(function (vehicle) { return _this.vehicle = vehicle; });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', vehicle_service_1.Vehicle)
                ], VehicleComponent.prototype, "vehicle", void 0);
                VehicleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-vehicle',
                        templateUrl: 'app/vehicles/vehicle.template.html',
                        providers: [vehicle_service_1.VehicleService]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, vehicle_service_1.VehicleService])
                ], VehicleComponent);
                return VehicleComponent;
            })();
            exports_1("VehicleComponent", VehicleComponent);
        }
    }
});
//# sourceMappingURL=vehicle.component.js.map