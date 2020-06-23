import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import axios from 'axios'
import './styles.css'
import { useHistory } from 'react-router-dom'

const Register = () => {

    interface State {
        id: number
        sigla: string
    }

    interface City {
        id: number
        nome: string
    }

    useEffect(() => {
        axios.get<State[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(resp => {
                setStates(resp.data)
            }).catch(err => console.log(err))
    }, [])

    const history = useHistory()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [markerLocation, setMarkerLocation] = useState<[number, number]>([0, 0])
    const [states, setStates] = useState<State[]>([])
    const [selectedState, setSelectedState] = useState<string>('0')
    const [cities, setCities] = useState<City[]>([])
    const [selectedCity, setSelectedCity] = useState<string>('0')

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        if(name === '') {
            alert('Selecione um nome!')
            return
        }

        if(description === '') {
            alert('Selecione uma descrição!')
            return
        }

        if(markerLocation[0] === 0 || markerLocation[1] === 0) {
            alert('Selecione uma localização!')
            return
        }

        if(selectedCity === '0' || selectedState === '0') {
            alert('Selecione uma cidade e um estado!')
            return
        }

        createInn()
        history.push('/success')
    }

    const changedState = (event: ChangeEvent<HTMLSelectElement>) => {
        const UF = event.target.value
        setSelectedState(UF)
        axios.get<City[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`)
            .then(resp => setCities(resp.data)).catch(err => console.log(err))
    }

    const changedCity = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(event.target.value)
    }

    const CREATE_INN = gql`
        mutation CreateInn($name: String!, $description: String!, $lat: Float!, $lng: Float!, $state: String!, $city: String!) {
            createInn(name: $name, description: $description, lat: $lat, lng: $lng, state: $state, city: $city) {
                id
                name
                description
                lat
                lng
                state
                city
            }
        }
    `

    const [createInn] = useMutation(CREATE_INN, {
        variables: {
            name,
            description,
            lat: markerLocation[0],
            lng: markerLocation[1],
            state: selectedState,
            city: selectedCity
        }
    })

    return (
        <div className="register">
            <div className="container">
                <h2>Welcome!</h2>
                <p>Here you can register you inn, remember yourself to put the city and the state correctly for the place appear for the users in that place.</p>
                <form className="form">
                    <input value={name} onChange={e => setName(e.target.value)}
                    className="register-text" type="text" placeholder="name"/>
                    <textarea value={description} onChange={e => setDescription(e.target.value)}
                    className="register-textarea" placeholder="description"></textarea>
                    <select defaultValue='0' onChange={changedState} value={selectedState} className="register-select">
                        <option value="0">Select your state</option>
                        {states.map(state => (
                            <option key={state.id} value={state.sigla}>{state.sigla}</option>
                        ))}
                    </select>
                    <select onChange={changedCity} value={selectedCity} defaultValue='0' className="register-select">
                        <option value="0">Select your city</option>
                        {cities.map(city => (
                            <option key={city.id} value={city.nome}>{city.nome}</option>
                        ))}
                    </select>
                    <p>Select the location in the map below</p>
                    <div className="register-map">
                        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}>
                            <GoogleMap onClick={e => setMarkerLocation([e.latLng.lat(), e.latLng.lng()])} center={{
                                lat: -3.5,
                                lng: -40
                            }} zoom={10} mapContainerStyle={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '3px'
                            }}>
                                <Marker position={{
                                    lat: markerLocation[0],
                                    lng: markerLocation[1]
                                }} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                    <button onClick={handleSubmit}>CADASTRAR</button>
                </form>
            </div>
        </div>
    )
}

export default Register