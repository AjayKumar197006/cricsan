import React, { useEffect,useState} from 'react'
import './table.css'


function Jersyno()
{
    const [data,setData]=useState([])
    useEffect(()=>
    {
        fetch("https://jersynos-production.up.railway.app/players")
        .then(res=>res.json())
        
        .then(data=>setData(data))
        .catch(err=>console.log(err))
    },[])

    return(
        <div className="container">
            <div className="tbl_container">
                <h3>Every Jersy number with wearing player</h3>
                <table className="tbl">
                    <thead>
                        <tr>
                          <th>Jersy No</th>
                          <th>Player</th>
                          <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            data.map(user =>
                            
                              <tr key={user.number}>
                                    <td>{user.number}</td>
                                    <td>{user.name}</td>
                                    <td>{user.country}</td>
                                </tr>
                                
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
    

}

export default Jersyno