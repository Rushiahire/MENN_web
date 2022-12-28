import React, { useEffect } from 'react'
import axios from 'axios';

const DetailPage = () => {
  
    useEffect(() => {
        axios.get("http://localhost:8000/get-user")
        .then((res)=>{
            console.log(res.data)
        })
    },[])
    
    return (
    <div>
        <h3>welcome to detail page</h3>
    </div>
  )
}

export default DetailPage;