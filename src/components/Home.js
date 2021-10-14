import React, {useState, useEffect} from 'react';
import API from "./api"
import Swal from 'sweetalert2'
import Product from "./Product"

export default function Home() {
    const [data, setData] = useState([])
    const open = () => {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href="">Why do I have this issue?</a>'
            })
      }


    useEffect(() => {
        API.get(`users`)
        .then((res) => {
            setData(res.data);
            // console.log(res.data)
        })
        .catch((err) => console.log("err", err))
    }, [])
    // console.log(data)

    return (
        <div>
             <button className="btn" onClick={open}>Open alert</button>
            <div>
            {
                data.map((item) =>{
                    return (
                       <Product key={item.id} item={item}/>
                    )
                })
            }
            </div>
        </div>
    )
}
