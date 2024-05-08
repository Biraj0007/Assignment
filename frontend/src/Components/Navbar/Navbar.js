import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to={'/'}>Home</Link>
                            <Link class="nav-link active" aria-current="page" to={'/login'}>Admin Login</Link>
                            <Link class="nav-link active" aria-current="page" to={'/employeeLogin'}>Employee Login</Link>
                            <Link class="nav-link active" aria-current="page" to={'/holidays/viewHoliday'}>Holidays</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar