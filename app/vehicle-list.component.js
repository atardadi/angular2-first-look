System.register(['angular2/core', './vehicle.service', './vehicle.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, vehicle_service_1, vehicle_component_1;
    var VehicleListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vehicle_service_1_1) {
                vehicle_service_1 = vehicle_service_1_1;
            },
            function (vehicle_component_1_1) {
                vehicle_component_1 = vehicle_component_1_1;
            }],
        execute: function() {
            VehicleListComponent = (function () {
                function VehicleListComponent(_VehicleService) {
                    this._VehicleService = _VehicleService;
                    this.messages = [];
                }
                VehicleListComponent.prototype.ngOnInit = function () {
                    this.getVehicles();
                };
                VehicleListComponent.prototype.getVehicles = function () {
                    this.vehicles = this._VehicleService.getVehicles();
                };
                VehicleListComponent.prototype.clear = function () {
                    this.selectedVehicle = null;
                };
                VehicleListComponent.prototype.log = function (msg) {
                    this.messages.splice(0, 0, msg);
                    console.log(msg);
                };
                VehicleListComponent.prototype.selectVehicle = function (toSelect) {
                    this.selectedVehicle = toSelect;
                };
                VehicleListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-vehicle-list',
                        templateUrl: 'app/vehicle-list.template.html',
                        directives: [vehicle_component_1.VehicleComponent],
                        providers: [vehicle_service_1.VehicleService]
                    }), 
                    __metadata('design:paramtypes', [vehicle_service_1.VehicleService])
                ], VehicleListComponent);
                return VehicleListComponent;
            })();
            exports_1("VehicleListComponent", VehicleListComponent);
        }
    }
});
//# sourceMappingURL=vehicle-list.component.js.map