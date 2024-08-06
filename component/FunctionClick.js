import { click } from '@testing-library/user-event/dist/click'
import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button Click');
    }
  return (
    <div>

        <button onClick={clickHandler}> Click</button>
      
    </div>
  )
}

export default FunctionClick
