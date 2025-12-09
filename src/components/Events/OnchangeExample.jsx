import React, { useState } from 'react'

const OnchangeExample = () => {

    const [person,setPerson]=useState({name:"Kiran",details:{
        course:"Java full stack",
        college:"SRPCE",
        project:"Amazon clone project"
    }})


    function handleChangeName(e){
      setPerson(
        {
              ...person,
              name:e.target.value,
        }
      )
    }

    
    function handleChangeCoure(e){
      setPerson(
        {
              ...person,
              details:
              {
                ...person.details,
                course:e.target.value,
              }
        }
      )
    }

    function handleChangeCollege(e){
      setPerson(
        {
              ...person,
              details:
              {
                ...person.details,
                college:e.target.value,
              }
        }
      )
    }

    function handleChangeProject(e){
      setPerson(
        {
              ...person,
              details:
              {
                ...person.details,
                project:e.target.value,
              }
        }
      )
    }
  return (
    <div>
      <form action="">
        <label htmlFor="Name">Name: </label><input type="text" onChange={handleChangeName} value={person.name}/> <br /><br />
        <label htmlFor="Course">Course: </label><input type="text" onChange={handleChangeCoure} value={person.details.course} />  <br /> <br />
        <label htmlFor="College">College: </label><input type="text" onChange={handleChangeCollege} value={person.details.college} /><br /><br />
        <label htmlFor="Project">Project : </label><input type="text" onChange={handleChangeProject} value={person.details.project} /><br /><br />
      </form>

      <h1>{person.name} Details: {person.details.course}|| {person.details.college} || {person.details.project}</h1>
    </div>
  )
}

export default OnchangeExample
