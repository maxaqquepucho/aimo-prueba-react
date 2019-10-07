import React from 'react'
import { Link } from 'react-router-dom'

//styles
import '../assets/scss/Navbar.scss'

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="logo">
                    Personas
                </div>

                <div className="btn-to-search">
                    <Link className="btn" to={ '/' } >Ir a buscar</Link>
                </div>

            </div>
        )
    }
}

export default Navbar