const express = require('express');
const graphqlHTTP = require('express-graphql');
const moon = require('mongoose')
const schema = require('./schema/schema');


const app = express();
const PORT = 4000

// database connection
moon.connect('mongodb://thealphadollar:test123@ds245715.mlab.com:45715/learn-graphql');
moon.connection.once('open', () => {
    console.log('Connection Established!');
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log('Now Listening on '+PORT);
});