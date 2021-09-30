import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../assets/logo/travelling.png';

/**
 * 
 * @author Vikrant, Dhananjay
 * This component renders header and uses condition rendering for differnt users/ non user
 */
function Header(props) {
    const history = useHistory();
    const flightuser = localStorage.getItem('user');

    /** The component will be rendered when user has not signed in */
    const loggedIn = (
        
            <ul className="nav justify-content-end">
             <li className="nav-item">
                <Link className="nav-link text-info" to="/">
                    <button className="btn btn-outline-light">Home</button>
                </Link>
            </li>
                <li className="nav-item">
                <Link className="nav-link text-info" to="/login">
                    <button className="btn btn-outline-light">Login</button>
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-info" to="/register">
                    <button className="btn btn-outline-light">Register</button>
                </Link>
                </li>
            </ul>
        
    );

    // clearing local storage for given items when user logs out
    const userClear = () => (
        localStorage.removeItem('user'),
        localStorage.removeItem('plane'),
        localStorage.removeItem('bid'),
        localStorage.removeItem('sid'),
        localStorage.removeItem('tickets'),
        localStorage.removeItem('nop'),
        localStorage.removeItem('ticket'),
        localStorage.clear()
    )

    /** Redirecting to booking history */
    const onTickets= () => {
       history.push('/tickets')
    }

    /** The component will be rendered when user is signed in */
    const loggedOut = (
            <ul className="nav justify-content-end">
                {/* {console.log(JSON.parse(localStorage.getItem('user')).isadmin)} */}
               

                <li className="nav-item">
                    <Link className="nav-link text-info" to="/">
                        <button className="btn btn-outline-light">Home</button>
                    </Link>
                </li>
                { localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin ===0 
                &&  
                    <li className="nav-item nav-link text-info">
                            <button onClick={onTickets} className="btn btn-outline-light">BookingHistory</button>
                    </li>
                }

                {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin ===1 
                &&
                <li className="nav-item">
                    <Link className="nav-link text-info" to="/addFlight">
                        <button className="btn btn-outline-light">Add Flight</button>
                    </Link>
                </li>}


                {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin ===1
                &&
                <li className="nav-item">
                    <Link className="nav-link text-info" to="/allFlights">
                        <button className="btn btn-outline-light">All Flights</button>
                    </Link>
                </li>
                }

                <li className="nav-item">
                    <Link className="nav-link text-info" to="/">
                        <button onClick={userClear} className="btn btn-outline-light">Logout</button>
                    </Link>
                </li>

                { localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin ===0 
                &&  
                <li className="nav-item nav-link text-info">
                    <h6 style={{marginTop:'7px'}}><b className='text-warning'>Welcome, {JSON.parse(localStorage.getItem('user')).username}</b></h6>
                </li>
                }

                
                {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin ===1
                &&
                <li className="nav-item">
                    <Link className="nav-link text-info" to="/admin">
                        <button className="btn btn-outline-info">Admin</button>
                    </Link>
                </li>
                }


            </ul>
    );
    

    return (
        <div>
            <nav className="navbar navbar-dark bg-nav fixed-top" style={navstyle.bg}>
                <div className="container-fluid">
                    <Link style={navstyle.navbar_brand} to="/">
                        BookMyFlight
                    </Link>
                       

                    { localStorage.getItem('user')  ? loggedOut : loggedIn  }
                    {/* {console.log(localStorage.getItem('user'))} */}
                   
                </div>
            </nav>
        </div>
    );
};

let navstyle = {
    bg : {
        backgroundColor : "#000033",
    },
    navbar_brand : {
        color: "#ffffff",
        fontSize: "x-large",
        fontFamily: "Verdana",
        fontStyle: "bold",
        textDecoration: "none"
    }

}

export default Header;