import React, { useEffect } from 'react'
import MovieForm from '../components/MovieForm'
import MovieList from '../components/MovieList'

export default function Home({allMovies,subMovies,setAllMovies,setSubMovies}) {

  return (
   <>
    <MovieForm allMovies={allMovies} setAllMovies={setAllMovies} 
              subMovies={subMovies} setSubMovies={setSubMovies}/>
    <MovieList allMovies={allMovies} setAllMovies={setAllMovies} 
              subMovies={subMovies} setSubMovies={setSubMovies}/>
  </> 
  )
}