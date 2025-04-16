import React from 'react'
import HydData from './data/hyd';
import "./App.css"

const Table = () => {
  return (
    <div>
       <table>
        <thead>

        </thead>
        <tbody>
            {
                HydData.map((value,index)=>{
                    return <tr key = {index}>
                        <th>{value.name}</th>
                        <th>{value.age}</th>
                        <th>{value.gender}</th>
                        <th>{value.class}</th>  
                    </tr>
                })
            }
        </tbody>
       </table>
    </div>
  )
}

export default Table
