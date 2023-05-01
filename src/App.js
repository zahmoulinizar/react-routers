import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import MovieForm from './components/MovieForm';
import { useState } from 'react';
import { movies } from './data';
import MovieList from './components/MovieList';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [allMovies, setAllMovies] = useState(movies)  // let us assume that this state (allMovies) is our database
  const [subMovies, setSubMovies] = useState(allMovies) 
  return (
    <div className="App">
      <Navbar />
      <div className='container-fluid mt-3'>
      <Routes>
        <Route path='/' element={<Home allMovies={allMovies} subMovies={subMovies}
                                 setAllMovies={setAllMovies} setSubMovies={setSubMovies}/>}/>
      <Route path='/:id' element={<About subMovies={subMovies}/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;