import React from 'react'
import {Link} from 'react-router-dom'

export default function Product({item}) {

    return (
        <div>
            <Link to={`users/${item.id}`}>
            <p>{item.name}</p>
            <p>{item.email}</p>
            </Link>
    </div>
    )
}
