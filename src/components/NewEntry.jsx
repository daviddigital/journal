import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function NewEntry({ categories, addEntry }) {

    const params = useParams()
    const [entry, setEntry] = useState("")
    const navigate = useNavigate()


    function submit(e) {
        e.preventDefault()
        addEntry(params.cat_id, entry)
        navigate("/")
    }

    return (
        <div>
            <h1>New Entry in {categories[params.cat_id]}</h1>
            <form onSubmit={submit}>
                <div>
                    <textarea onChange={e => setEntry(e.target.value)} value={entry} name="" id="" cols="60" rows="10"></textarea>
                </div>
                <button> Create New Entry</button>
            </form>
        </div>
    )
}
