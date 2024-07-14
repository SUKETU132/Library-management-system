import React from 'react';
import BookItem from '../BookItem/BookItem';
import './Trending.css';

function Trending() {
  // Sample data
  const trendingBooks = [
    {
        id: 1,
        image: 'https://via.placeholder.com/50x75',
        title: 'Clean Code',
        author: 'Robert C. Martin',
      },
      {
        id: 2,
        image: 'https://via.placeholder.com/50x75',
        title: 'Refactoring',
        author: 'Martin Fowler',
      },
      {
        id: 3,
        image: 'https://via.placeholder.com/50x75',
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
      },
      {
        id: 4,
        image: 'https://via.placeholder.com/50x75',
        title: 'Design Patterns',
        author: 'Erich Gamma',
      },
      {
        id: 5,
        image: 'https://via.placeholder.com/50x75',
        title: 'Code Complete',
        author: 'Steve McConnell',
      },
  ];

  return (
    <div className="trending">
      <h2>Trending</h2>
      {trendingBooks.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}

export default Trending;
