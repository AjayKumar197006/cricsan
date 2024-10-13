import React ,{useState,useEffect} from 'react'
import './stats.css'


function Stats()
{
    const [data,setData]=useState([])
    useEffect(()=>
        {
             fetch("https://stats-production-3899.up.railway.app/data")
            .then(res=>res.json())
            .then(data=>setData(data))
            .catch(err=>console.log(err))
        },[])

    return(
          <>
                
        
          <div className="cardbox">
            {
              
                data.map(values =>
                
                  
                    <div key={values.seq} className="card">
                      <img src={values.imgurl} />
                      <div className="card-content">
                        <h3>{values.title}</h3>
                        <p>{values.desc}</p>
                        <a href={values.url} className="btn">Read More</a>
                      </div>
                    </div>
                
                )
            }
            
          </div>
          </>
        
    )
    
  }

export default Stats