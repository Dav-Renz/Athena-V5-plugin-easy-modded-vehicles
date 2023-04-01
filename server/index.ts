import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';
import { VehicleData } from '../../../shared/information/vehicles';
import { moddedVehs } from '../shared/information/vehicles';

const PLUGIN_NAME = 'moddedVehicles';

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, () => {});

for (const _vehData of moddedVehs) {
    VehicleData.push(_vehData);
}
