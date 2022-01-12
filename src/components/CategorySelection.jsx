import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CategorySelection( { categories }) {
    return (
        <div>
            <h2>Please select a category</h2>
            <ul>
                {categories.map(cat => (
                    <li>
                        <Link to={`/entry/new/${cat}`}> {cat} </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
