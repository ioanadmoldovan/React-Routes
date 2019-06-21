import React from 'react';
import { Link , NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {

    //programmatic redirect
    setTimeout( () => {
        props.history.push('/about');
    }, 2000 );
        
    return(
        <nav className={"nav-wrapper blue darken-3"}>
            <div className={"container"}>
                <div className={'brand-logo'}> React Routes </div>
                <ul className={"right"}>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/about"> About </Link> </li>
                    <li> <NavLink  to="/contact"> Contact </NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);//supercharged component