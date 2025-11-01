import React from 'react'
import { useSelector } from 'react-redux'

export const LibraryHistory = () => {
    const result = useSelector((state) => state.books);
    return (
        <>
            <div className='container'>
                <h2 className='mt-5 mb-4'>All Books</h2>
                <h3>Total Books: {result.length}</h3>
                <ul>
                    {
                        result.map((curr, index) => (
                            <li key={index}>{curr.title} by {curr.author} (ISBN: {curr.isbn})</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
