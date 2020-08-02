import React, { useEffect } from "react";
import {Inventory} from './inventory';
import { Router, Link } from '@reach/router';
import { useDispatch, useSelector } from "react-redux";
import { ADD_BOOK } from './store/reducer'

import { Add } from './Add';

export const App = () => {

  const books = useSelector(state => state.reducer.books); // odczyt stanu ze stora
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://clockworkjava.pl/books.php")
      .then(response => {
        return response.json()
      })
      .then(data => {
        data.forEach(book => {
          dispatch({
            type: ADD_BOOK,
            payload: book
          })
        })
      })
  }, [])


  return (
    <React.StrictMode>
    <div id="created-by-react">
      <Link to="/">
        <h1>React Bookstore</h1>
      </Link>
      <Router>
        <Add path="/admin"/>
        <Inventory books={books} path="/"/> 
      </Router>
    </div>
    </React.StrictMode> 
  )
};



