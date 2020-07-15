import React from "react";
import ReactDOM from "react-dom";

import { Book } from './Book'

const App = () => {
  return React.createElement(
    "div",
    {
      id: "created by react",
    },
    [
      React.createElement("h1", {}, "React Bookstore"),
      React.createElement(Book, {
        title: "Straż! straż!",
        author: "Terry Prachett",
        date: "1989",
      }),
      React.createElement(Book, {
        title: "Dwie wieże",
        author: "J. R. R. Tolkien",
        date: "1954",
      }),
      React.createElement(Book, {
        title: "Komnata Tajemnic",
        author: "J. K. Rowling",
        date: "1998",
      }),
    ]
  );
};



ReactDOM.render(React.createElement(App), document.getElementById("root"));
