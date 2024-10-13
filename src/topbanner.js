import React, {useState, useEffect} from "react"
import { Link } from 'react-router-dom'
import './topbanner.css'

function Topbanner()
{
    const [data,setData]=useState([])
    useEffect(()=>
    {
        fetch('https://cricket-schedule.up.railway.app/schedule')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
        
    },[])

    return(
       
        <div className="top-banner">
            {
                data.map(values =>

                    <div key={values.seq} className="banner-content container">
                        <p className="matches">{values.matches}</p>
                        <p>Starts {values.time}</p>
                    </div>

                )
            }

        </div>
    )
}

export default Topbanner
