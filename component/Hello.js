import React from 'react'

const Hello = () => {
    // return (
    //     <div className='Nimco'>
    //         <h1> Hi Nimco </h1>
    //     </div>
    // )

    return React.createElement('p', null, 'Hello Muxammed', React.createElement('p', null, 'Muxammed'))
   
}

export default Hello