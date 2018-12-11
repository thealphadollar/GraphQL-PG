const moon =  require('mongoose');
const Schema = moon.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
});

module.exports = moon.model('Book', bookSchema);