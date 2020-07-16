import React, { useState, useEffect } from 'react';

import useDropdown from './useDropdown';

export const Add = () => {

  const [author, setAuthor] = useState("");
  // const [genre, setGenre] = useState("");
  // const [audience, setAudience] = useState("");


  const genres = ["fantasy", "horror", "kryminał"];
  const audiences = ["dzieci", "młodzież", "dorośli"];

  const [genre, SetGenreDropdown] = useDropdown("", "Gatunek", genres);
  const [audience, SetAudienceDropdown] = useDropdown("", "Dla", audiences)

  useEffect(() => {
    console.log("used effect");
  }, [genre])

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
        <SetGenreDropdown />
        <br/>
        <SetAudienceDropdown />

        <button> Dodaj </button>
      </form>
    </div>
  )
}