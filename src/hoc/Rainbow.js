//hoc that  is gonna randomize the text colour of another component
import React from 'react';

const Rainbow = ( WrappedComponent ) => {
    
    const colours = [ 'red', 'pink' ,'orange', 'blue', 'green', 'yellow' ];
    const randomColour = colors[ Math.floor( Math.random() * 5 ) ];

    //adding a className for changing the text colour (with meterialize)
    const className = randomColour + '-text'; 

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}
    //if the WrappedComponent has any props, they are passed here as well;
    //it's gonna return the div in About, but that div is gonna have an extra div 
    // around it with the className of randomColour

export default Rainbow;