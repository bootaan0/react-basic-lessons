import React from 'react'

function Namelist2() {

    const names = ['Bruce', 'Clark', 'Diana','Bruce', 'Diana']

    const nameList = names.map((name, index) => <h2 key={index}> {index} {name}</h2>)
  return (
    <div>
      {nameList }
    </div>
  )
}

export default Namelist2
