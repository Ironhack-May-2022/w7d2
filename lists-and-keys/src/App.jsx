import './App.css'
import { useState } from 'react'
import MoviesList from './MoviesList';

const moviesData = [
  {
    "_id": "1ae23ef1",
    "title": "The Godfather",
    "director": "Francis Coppola",
    "hasOscars": true,
    "IMDBRating": 9.2
  },
  {
    "_id": "1ae23ef2",
    "title": "Star Wars",
    "director": "George Lucas",
    "hasOscars": true,
    "IMDBRating": 8.7
  },
  {
    "_id": "1ae23ef3",
    "title": "The Shawshank Redemption",
    "director": "Frank Darabont",
    "hasOscars": false,
    "IMDBRating": 9.3
  },
  {
    "_id": "1ae23ef4",
    "title": "Jurassic Park",
    "director": "Steven Spielberg",
    "hasOscars": false,
    "IMDBRating": 8.0
  },
  {
    "_id": "1ae23ef5",
    "title": "Sharknado",
    "director": "Anthony C. Ferrante",
    "hasOscars": false,
    "IMDBRating": 5.2
  },
  {
    "_id": "1ae23ef6",
    "title": "Titanic",
    "director": "James Cameron",
    "hasOscars": true,
    "IMDBRating": 8.9
  }
]

function App() {

  const [movies, setmovies] = useState(moviesData);

  const addMovie = () => {
    // add the movie Interstellar to the list
    const newMovie = {
      _id: '1ae343224jkl',
      title: 'Interstellar',
      director: 'Christopher Nolan',
      hasOscars: true,
      IMDBRating: 8.6
    }
    setmovies([newMovie, ...movies])
    // const copy = movies.slice()
    // copy.push(newMovie)
    // setmovies(copy)
  }
  console.log('render')
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addMovie}>Add a movie</button>
        {/* {movies.map(movie => (
          <div key={movie._id}>
            <h3>{movie.title}</h3>
            <h5>{movie.director}</h5>
          </div>
        ))} */}
        <MoviesList movies={movies} />
      </header>
    </div >
  )
}

export default App
