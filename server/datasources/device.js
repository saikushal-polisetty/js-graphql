const { RESTDataSource} = require('apollo-datasource-rest');

class DeviceAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = 'https://qa.apigateway.honeywellhome.com/devices/';
    }

    async getAllDevices(){
        const response = await this.get('privateapi/devices?$top=700');
        return  Array.isArray(response)
            ? response.map(device => this.deviceReducer(device)) : [];
    }

    async getDeviceById({id}){
        console.log(id);
        const response = await this.get('privateapi/devices?$filter=id eq '+ id);        
        return  Array.isArray(response)
        ? response.map(device => this.deviceReducer(device))[0] : null;
    }

    async getAllDeviceTypes(){
        const response = await this.get('api/devicetypes');
        return  Array.isArray(response)
            ? response.map(device => this.deviceTypeReducer(device)) : [];
    }

    deviceReducer(device){
        return {
            deviceId : device.id,
            deviceName : device.name,
            deviceType : device.typeId,
            status : device.managedAreaId
        }
    }

    deviceTypeReducer(deviceType){
        return {
            id : deviceType.id,
            name : deviceType.name            
        }
    }
}

module.exports = DeviceAPI;