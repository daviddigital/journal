import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/entry/new">New Entry</Link> | 
            <Link to="/category">Category</Link>
        </nav>
    )
}
