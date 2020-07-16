import React, { useState } from 'react';

export const Add = () => {

  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")


  const genres = ["fantasy", "horror", "kryminał"]

  return (
    <div>
      <form>
        <label htmlFor="author">
          Autor
          <input 
            id="author" 
            value={author} 
            placeholder="Autor" 
            onChange={e => setAuthor(e.target.value)}
          />
        </label>
        <br/>
        <label htmlFor="genre">
          Gatunek: 
          <select 
            id="genre" 
            value={genre} 
            onChange={e => setGenre(e.target.value)} 
            onBlur={e => setGenre(e.target.value)}>
              <option>Dowolny</option>
              {
                genres.map( genre => {
                  return <option key={genres}value={genre}>{genre}</option>
                })
              }
          </select>
        </label>
        <button> Dodaj </button>
      </form>
    </div>
  )
}