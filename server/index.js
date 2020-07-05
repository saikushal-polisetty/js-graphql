const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const DeviceApI = require('./datasources/device');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        deviceAPI: new DeviceApI()
    })
});


server.listen().then(({url}) => {
    console.log(`Server running at ${url}`)

});