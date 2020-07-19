import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {Inventory} from './inventory'

import { Add } from './Add';

const App = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://clockworkjava.pl/books.php")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setBooks(data);
      })
  }, [])


  return (
    <React.StrictMode>
    <div id="created-by-react">
      <h1>React Bookstore</h1>
      <Add books={books} setBooks={setBooks}/>
      <Inventory books={books} /> 
    </div>
    </React.StrictMode> 
  )
};



ReactDOM.render(<App />, document.getElementById("root"));
