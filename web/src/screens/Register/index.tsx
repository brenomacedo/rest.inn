import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import './styles.css'

const Register = () => {

    const [markerLocation, setMarkerLocation] = useState<[number, number]>([0, 0])

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
                        <LoadScript googleMapsApiKey='AIzaSyAYrVLhmBoNrZHNuz7JxaqO3Iy3EC_2XwU'>
                            <GoogleMap center={{
                                lat: -3.5,
                                lng: -40
                            }} zoom={10} mapContainerStyle={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '3px'
                            }} />
                        </LoadScript>
                    </div>
                    <button>CADASTRAR</button>
                </form>
            </div>
        </div>
    )
}

export default Register