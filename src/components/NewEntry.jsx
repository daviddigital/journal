import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react'

export default function NewEntry(props) {

    const params = useParams()
    const [entry, setEntry] = useState("")

    function submit(e) {
        e.preventDefault()
        // const entry = { cat_id: , text: {entry}}
    }

    return (
        <div>
            <h1>New Entry in {params.category}</h1>
            <form onSubmit={submit}>
                <div>
                    <textarea onChange={e => setEntry(e.target.value)} value={entry} name="" id="" cols="60" rows="10"></textarea>
                </div>
                <button> Create New Entry</button>
            </form>
        </div>
    )
}
