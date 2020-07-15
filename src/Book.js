import React from 'react';

export const Book = ({ title, author, date }) => {

  return (
    <div>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <h4>{date}</h4>
    </div>
  )
};