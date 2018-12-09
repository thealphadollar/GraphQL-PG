const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();
const PORT = 4000

app.use('/graphql', graphqlHTTP({
    // TODO
}));

app.listen(PORT, () => {
    console.log('Now Listening on '+PORT);
});