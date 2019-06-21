//hoc that  is gonna randomize the text colour of another component
import React from 'react';

const Rainbow = ( WrappedComponent ) => {
    
    const colours = [ 'red', 'pink' ,'orange', 'blue', 'green', 'yellow' ];
    const randomColour = colours[ Math.floor( Math.random() * 5 ) ];
    // pick a random index = Math.random() = a no from 0 to 1. 
    // multiply by 5 because there are 6 positions
    // Math.floor - we need an integer from 0 to 5

    //adding a className for changing the text colour ( with meterialize )
    const className = randomColour + '-text'; // ex: className = 'red-text'

    return ( props ) => {
        return (
            <div className={ className }>
                <WrappedComponent { ...props } /> {/* if the WrappedComponent has any props, they are passed here as well */}
            </div>
        )
    }
}
    
    //it returns the div in the WrappedComponent, but that div is gonna have an extra div 
    // around it with the className of randomColour ( see About )

export default Rainbow;