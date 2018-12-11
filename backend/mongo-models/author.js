const moon =  require('mongoose');
const Schema = moon.Schema;

const authorSchema = ({
    name: String,
    age: Number,
});

module.exports = moon.model('Author', authorSchema);