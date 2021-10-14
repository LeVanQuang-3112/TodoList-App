import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import API from "./api"


export default function ProductDetail() {
    let data = useParams()
    const [user, setUser] = useState()

    useEffect(() => {
        const resquestGet = async () => {
            try {
                await API.get(`users/${data.id}`)
                .then((response) => {
                    setUser(response.data)
                })
            } 
                catch(err) {
                    console.log("err", err)
                }
        }
        resquestGet()
    },[data.id])
    console.log(user)
    return (
        <div>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
            <p>{user?.phone}</p>
        </div>
    )
}
