db = connect('mongodb://localhost/myDatabase');
db.movies.insertMany([
    {
        title: 'Titanic',
        year: 1997,
        genres: ['Drama', 'Romance']
    },
    {
        title: 'Spirited Away',
        year: 2001,
        genres: ['Animation', 'Adventure', 'Family']
    },
    {
        title: 'Casablanca',
        genres: ['Drama', 'Romance', 'War']
    }
])

let movies = db.movies.find();

console.log(movies);
