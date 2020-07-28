import React from 'react';
import { Link } from 'react-router-dom'

import GoogleAuth from './../container/localHost/GoogleAuth';


const Header = () => {
    return(
        <div className='navbar container'>
        <Link className='navbar-brand' to='/'>
            Title
        </Link>
        <ul className='nav navbar-nav navbar-right'>
            <GoogleAuth />
        </ul>
    </div>
    );
}

export default Header;