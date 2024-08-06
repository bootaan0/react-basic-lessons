import React from 'react'
import Person from './Person'
function NameList() {

    const persons = [{
        id: 1,
        name: 'Muxamed',
        age: 30,
        skill: 'React'
    },
    {
        id: 2,
        name: 'Axmed',
        age: 31,
        skill: 'Html',
    },
    {
        id: 3,
        name: 'Maxamuudi',
        age: 34,
        skill: 'Php'
    }
]

const personList = persons.map(person => <Person key={person.id} person={person} />)
return <div> {personList} </div>
  
}

export default NameList
