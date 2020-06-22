import React from 'react'
import './styles.css'

const Register = () => {
    return (
        <div className="register">
            <div className="container">
                <h2>Welcome!</h2>
                <p>Here you can register you inn, remember yourself to put the city and the state correctly for the place appear for the users in that place.</p>
                <form className="form">
                    <input className="register-text" type="text" placeholder="name"/>
                    <textarea className="register-textarea" placeholder="descrição"></textarea>
                    <select className="register-select">
                        <option value="">CE</option>
                        <option value="">CE</option>
                        <option value="">CE</option>
                        <option value="">CE</option>
                    </select>
                    <select className="register-select">
                        <option value="">Fortaleza</option>
                        <option value="">Fortaleza</option>
                        <option value="">Fortaleza</option>
                        <option value="">Fortaleza</option>
                    </select>
                    <p>Select the location in the map below</p>
                    <div className="register-map">

                    </div>
                    <button>CADASTRAR</button>
                </form>
            </div>
        </div>
    )
}

export default Register