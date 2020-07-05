const {paginateResults} = require('./util');

module.exports = {
    Query:{
        devices: (_, __, {dataSources}) => 
            dataSources.deviceAPI.getAllDevices(),
        // devices: async (_, { pageSize = 20, after }, { dataSources }) => {
        //     const allDevices = await dataSources.deviceAPI.getAllDevices();
        //         // we want these in reverse chronological order
        //         allDevices.reverse();
        //         const devices = paginateResults({
        //           after,
        //           pageSize,
        //           results: allDevices
        //         });
        //         return {
        //           devices,
        //           id: devices.length ? devices[devices.length - 1].deviceId : null,                  
        //           hasMore: devices.length ? 
        //                    devices[devices.length - 1].deviceId !== allDevices[allDevices.length - 1].deviceId
        //                     : false
        //         };
        //     },
        device: (_, {deviceId}, {dataSources}) => 
            dataSources.deviceAPI.getDeviceById({id :deviceId}),
        deviceTypes: (_, __, {dataSources}) => 
            dataSources.deviceAPI.getAllDeviceTypes(),
    }
}