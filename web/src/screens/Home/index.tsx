import React from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom'

const Home = () => {

    const history = useHistory()

    const handleRegister = () => {
        history.push('/register')
    }

    return (
        <>
            <div className="home-presentation">
                <h2>rest.inn</h2>
                <p>The best solution for rest during travels!</p>
                <button onClick={handleRegister}>Register an Inn!</button>
            </div>
            <div className="home-info">
                <div className="home-info-item">
                    <div className="home-info-image">
                        <img src="/happy.png" alt="easy"/>
                    </div>
                    <div className="home-info-description">
                        <h3>Easy to use</h3>
                        <p>Our interface was made in order to bring to the user a better experience while searching for good places to rest</p>
                    </div>
                </div>
                <div className="home-info-item">
                    <div className="home-info-image">
                        <img src="/imobiliaria.png" alt="easy"/>
                    </div>
                    <div className="home-info-description">
                        <h3>Easy to find</h3>
                        <p>Our system sorts the places by state and city to smooth your search.</p>
                    </div>
                </div>
                <div className="home-info-item">
                    <div className="home-info-image">
                        <img src="/rota.png" alt="easy"/>
                    </div>
                    <div className="home-info-description">
                        <h3>High accuracy location</h3>
                        <p>With the gps, you can find easily the place where you want to go.</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>Icons made by <a href="https://www.flaticon.com/br/autores/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a></p>
                <p>Icons made by <a href="https://www.flaticon.com/br/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a></p>
                <p>Icons made by <a href="https://www.flaticon.com/br/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a></p>
            </div>
        </>
    )
}

export default Home