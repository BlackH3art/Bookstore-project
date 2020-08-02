import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import useDropdown from './useDropdown';
import {InputComponent} from './InputComponent';
import { ADD_BOOK } from './store/reducer';

export const Add = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const dispatch = useDispatch();


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

    dispatch({
      type: ADD_BOOK,
      payload: newBook
    })
    // const newBooks = [...books, newBook];

    // setBooks(newBooks)
  }


  return (
    <div>
      <form>
        <InputComponent label="Tytuł" state={title} setState={setTitle} />
        <InputComponent label="Autor" state={author} setState={setAuthor} />
        <InputComponent label="Data publikacji" state={publicationDate} setState={setPublicationDate} type="number"/>
      
        <br/>
        <SetGenreDropdown />
        <br/>
        <SetAudienceDropdown />

        <button onClick={event => addBook(event)}> Dodaj </button>
      </form>
    </div>
  )
}