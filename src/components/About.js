import React from 'react';
import Rainbow from '../hoc/Rainbow'

const About = () => {
        return(
            <div className="container">
                <h3 className="center"> About </h3>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum sequi repellat aut? Recusandae, asperiores velit. Doloremque explicabo blanditiis inventore fugit reprehenderit earum voluptatem, architecto optio eum aperiam perspiciatis maxime aspernatur.</p>
            </div>
        )
    }

export default Rainbow(About);

// About is super charged
// About will have around it an extra div with the className of randomColours