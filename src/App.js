import React from "react";
import ReactDOM from "react-dom";

import { Book } from './Book';
import { Add } from './Add';

const App = () => {
  return (
    <React.StrictMode>
    <div id="created-by-react">
      <h1>React Bookstore</h1>
      <Add />
      <Book title="Straż! straż!" author="Terry Prachett" date="1989" genre="fantasy" audience="młodzież"/>
      <Book title="Dwie wieże" author="J. R. R. Tolkien" date="1954" genre="fantasy" audience="młodzież"/>
      <Book title="Komnata Tajemnic" author="J. K. Rowling" date="1998" genre="fantasy" audience="młodzież"/>
    </div>
    </React.StrictMode>
  )
};



ReactDOM.render(<App />, document.getElementById("root"));
