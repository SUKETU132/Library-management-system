import React from 'react';
import BookItem from '../BookItem/BookItem';
import './NewArrivals.css';

function NewArrivals() {
    // 
    const newArrivals = [
        {
            id: 1,
            image: 'https://via.placeholder.com/50x75',
            title: 'Effective JavaScript',
            author: 'David Herman',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/50x75',
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/50x75',
            title: 'Eloquent JavaScript',
            author: 'Marijn Haverbeke',
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/50x75',
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
        },
        {
            id: 5,
            image: 'https://via.placeholder.com/50x75',
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
        },
    ];

    return (
        <div className="new-arrivals">
            <h2>New Arrivals</h2>
            {newArrivals.map(book => (
                <BookItem key={book.id} book={book} />
            ))}
        </div>
    );
}

export default NewArrivals;
