import React from 'react'
import {student} from './data/data.js'

const ListExample = () => {
     const students=student.map(s=>
        <li key={s.id}>
            <img src={s.imageId} alt={s.name} />
            <p>{s.name}</p>
            <p>{s.profession}</p>
            <p>{s.accomplishment}</p>
        </li>
     )
  return (
   
    <div>
        <h1>Student list</h1>
        <ul>
            {students}
        </ul>
    </div>
  )
}

export default ListExample
