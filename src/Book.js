import React from 'react';

export const Book = ({ title, author, publicationDate, genre, audience}) => {

  return (
    <div>
      <hr/>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <h4>{publicationDate}</h4>
      <h4>{genre}</h4>
      <h4>{audience}</h4>
    </div>
  )
};