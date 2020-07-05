const {gql} = require('apollo-server');
const typeDefs = gql`
    type Query {
        devices : [Device]
        device(deviceId : ID!): Device
        deviceTypes : [DeviceType]        
    }

    type DeviceConnection { # add this below the Query type as an additional type.
        id: String!
        hasMore: Boolean!
        devices: [Device]!
    }

    type Device{
        deviceId : ID!
        deviceName : String
        deviceType : String
        status : Int        
    }

    type DeviceType{
        id : String
        name : String              
    }

    type Mutation{
        saveDevice(deviceId : ID!): DeviceUpdateResponse

        DeleteDevice(deviceId : ID!): Boolean
    }

    type DeviceUpdateResponse{
        success: Boolean!
    }
`;
module.exports = typeDefs;

// devices( # replace the current launches query with this one.
        //     """
        //     The number of results to show. Must be >= 1. Default = 20
        //     """
        //     pageSize: Int
        //     """
        //     If you add a cursor here, it will only return results _after_ this cursor
        //     """
        //     after: String
        // ): DeviceConnection! 