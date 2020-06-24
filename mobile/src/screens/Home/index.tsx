import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, ImageBackground, Dimensions, Alert } from 'react-native'
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import RNPicker from 'react-native-picker-select'
import axios from 'axios'

const Home = () => {

    interface State {
        id: number
        nome: string
        sigla: string
    }

    interface City {
        id: number
        nome: string
    }

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(resp => setStates(resp.data))
            .catch(err => console.log(err))
    }, [])

    const [states, setStates] = useState<State[]>([])
    const [selectedState, setSelectedState] = useState<string>('')
    const [cities, setCities] = useState<City[]>([])
    const [selectedCity, setSelectedCity] = useState<string>('')

    const [fontsLoaded] = useFonts({ Roboto_400Regular })

    const navigation = useNavigation()

    const handleLogin = () => {
        if(selectedState === '0' || selectedCity === '0') {
            Alert.alert('Error', 'Select the state and the city!')
        } else {
            navigation.navigate('Map', {
                city: selectedCity,
                state: selectedState
            })
        }
    }

    const changedState = (UF: string) => {
        setSelectedState(UF)
        axios.get<City[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`)
            .then(resp => setCities(resp.data))
    }

    if(!fontsLoaded) {
        return <Text>Loading</Text>
    }

    return (
        
           <ImageBackground style={styles.image} source={require('../../../assets/background.jpg')}>
               <Text style={styles.mainText}>rest.inn</Text>
               <Text style={styles.descText}>The best solution for rest during travels!</Text>
               <View style={styles.form}>
                    <View style={styles.pickers}>
                        <RNPicker value={selectedState} style={{
                            inputAndroid: styles.picker,
                            inputIOS: styles.picker
                        }} onValueChange={UF => changedState(UF)} items={states.map(state => {
                            return { label: state.sigla, value: state.sigla }
                        })} placeholder={{ label: 'Selecione seu estado', value: '0' }}/>
                        <RNPicker style={{
                            inputAndroid: styles.picker,
                            inputIOS: styles.picker
                        }} value={selectedCity} onValueChange={city => setSelectedCity(city)} items={cities.map(city => {
                            return { label: city.nome, value: city.nome }
                        })} placeholder={{ label: 'Selecione sua cidade', value: '0' }} />
                    </View>
                    <RectButton onPress={handleLogin} style={styles.button}>
                        <Text style={styles.buttonText}>See inns</Text>
                    </RectButton>
                </View>
           </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('screen').width,
        flex: 1,
        alignItems: 'center'
    },
    mainText: {
        fontFamily: 'Roboto_400Regular',
        color: 'white',
        fontSize: 70,
        textAlign: 'center',
        paddingTop: 30
    },
    descText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15
    },
    picker: {
        width: 150,
        padding: 10,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 2
    },
    pickers: {
        width: 320,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10
    },
    form: {
        position: 'absolute',
        bottom: 50,
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#2133d9',
        padding: 10,
        borderRadius: 2,
        width: 310,
        alignItems: 'center'
    },
    buttonText: {
        color:  'white'
    }
})

export default Home