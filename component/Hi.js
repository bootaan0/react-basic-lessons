import React from "react";


const Hi = props => {
    const {name , heroName} = props
    
    return (
        <div>
            <h1> Salaam {name}  {heroName} </h1>
            <p> {props.children} </p>
        </div>
    )

}


export default Hi