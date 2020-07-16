import React, { useState } from 'react';

export const Add = () => {

  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")
  const [audience, setAudience] = useState("")


  const genres = ["fantasy", "horror", "kryminał"];
  const audiences = ["dzieci", "młodzież", "dorośli"];

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
                  return <option key={genre} value={genre}>{genre}</option>
                })
              }
          </select>
        </label>
        <label htmlFor="audience">
          Dla:
          <select 
            id="audience"
            value={audience}
            onChange={e => setAudience(e.target.value)}
            onBlur={e => setGenre(e.target.value)}>

              {
                audiences.map(audience => {
                  return <option key={audience} value={audience}>
                    {audience}
                  </option>
                })
              }
            </select>
        </label>

        <button> Dodaj </button>
      </form>
    </div>
  )
}