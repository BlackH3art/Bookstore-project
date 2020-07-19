import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {Inventory} from './inventory';
import { Router, Link } from '@reach/router';

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
      <Link to="/">
        <h1>React Bookstore</h1>
      </Link>
      <Router>
        <Add books={books} setBooks={setBooks} path="/admin"/>
        <Inventory books={books} path="/"/> 
      </Router>
    </div>
    </React.StrictMode> 
  )
};



ReactDOM.render(<App />, document.getElementById("root"));
