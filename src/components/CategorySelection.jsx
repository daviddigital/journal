import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CategorySelection( { categories }) {
    return (
        <div>
            <h2>Please select a category</h2>
            <ul>
                {categories.map((cat, index) => (
                    <li>
                        <Link to={`/entry/new/${index}`}> {cat} </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
