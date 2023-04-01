import { VEHICLE_CLASS, VEHICLE_TYPE, FUEL_TYPE } from '@AthenaShared/enums/vehicleTypeFlags';
import { VehicleInfo } from '@AthenaShared/interfaces/vehicleInfo';

export const moddedVehs: Array<VehicleInfo> = [
    {
        displayName: 'What you want to show ingame',
        name: 'whatTheVehicleIsCalled',
        type: VEHICLE_TYPE.CAR,
        class: VEHICLE_CLASS.COMMERCIAL,
        sell: true,
        price: 999999999,
        storage: 24,
        fuelType: FUEL_TYPE.DIESEL,
        hash: 123456,
        manufacturerDisplayName: null,
        manufacturer: 'can also be null',
    },
];
