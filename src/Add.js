import React, { useState } from 'react';

import useDropdown from './useDropdown';

export const Add = ({books, setBooks}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationDate, setPublicationDate] = useState("");


  const genres = ["fantasy", "horror", "kryminał"];
  const audiences = ["dzieci", "młodzież", "dorośli"];

  const [genre, SetGenreDropdown] = useDropdown("", "Gatunek", genres);
  const [audience, SetAudienceDropdown] = useDropdown("", "Dla", audiences);

  const addBook = event => {
    event.preventDefault();
    event.stopPropagation();
    const newBook = {
      author: author,
      title: title,
      publicationDate: publicationDate,
      genre: genre,
      audience: audience
    }
    const newBooks = [...books, newBook];

    setBooks(newBooks)
  }


  return (
    <div>
      <form>
      <label htmlFor="title">
          Tytuł
          <input 
            id="title" 
            value={title} 
            placeholder="tytuł" 
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <br/>

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

        <label htmlFor="publicationDate">
          Data publikacji
          <input 
            id="publicationDate" 
            value={publicationDate} 
            placeholder="data publikacji" 
            onChange={e => setPublicationDate(e.target.value)}
          />
        </label>
        <br/>
        <SetGenreDropdown />
        <br/>
        <SetAudienceDropdown />

        <button onClick={event => addBook(event)}> Dodaj </button>
      </form>
    </div>
  )
}