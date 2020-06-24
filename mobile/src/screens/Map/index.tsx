import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import MapView, { Marker } from 'react-native-maps'
import { getCurrentPositionAsync } from 'expo-location'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'


const MapScreen = () => {

    interface IInn {
        id: number
        name: string
        description: string
        lat: number
        lng: number
        state: string
        city: string
    }

    interface IPosition {
        lat: number
        lng: number
    }

    type ISearch = {
        search: {
            state: string
            city: string
        }
    }

    const route = useRoute<RouteProp<ISearch, 'search'>>()

    const [position, setPosition] = useState<IPosition>({ lat: 0, lng: 0 })

    useEffect(() => {
        getCurrentPositionAsync().then(position => {
            setPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        }).catch()

        console.log(data.getInns)
    }, [])

    const navigation = useNavigation()

    const handleLogout = () => {
        navigation.goBack()
    }

    const GET_INNS = gql`
        query GetInns ($city: String!, $state: String!) {
            getInns (city: $city, state: $state) {
                id
                name
                description
                lat
                lng
                city
                state
            }
        }
    `

    const { error, loading, data } = useQuery(GET_INNS, {
        variables: {
            city: route.params.city,
            state: route.params.state
        }
    })

    if(error) {
        <Text>Error</Text>
    }

    if(loading) {
        <Text>Loading</Text>
    }

    return (
        <View style={styles.container}>
            <View style={styles.goBack}>
                <Feather onPress={handleLogout} name='arrow-left' color='blue' size={30} />
            </View>
            <View style={styles.welcome}>
                <Text style={styles.mainText}>
                    Welcome!
                </Text>
                <Text style={styles.descText}>
                    See in the map your options!
                </Text>
            </View>
            <View style={styles.map}>
            <MapView showsUserLocation style={styles.mapView}
                initialRegion={{
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }} region={{
                latitude: position.lat,
                longitude: position.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}>
                {data.getInns.map((item: any) => {
                    return (
                        <Marker key={item.id} coordinate={{ latitude: item.lat, longitude: item.lng }}>
                            <View style={styles.marker}>
                                <Text style={styles.markerText}>{item.name}</Text>
                                <Image style={styles.markerIcon} source={require('../../../assets/house.png')} />
                            </View>
                        </Marker>
                    )
                })}
            </MapView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mapView: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#e6e8ff'
    },
    goBack: {
        padding: 20
    },
    welcome: {
        padding: 20
    },
    mainText: {
        fontWeight: 'bold',
        fontSize: 25
    },
    descText: {
        fontSize: 18
    },
    map: {
        backgroundColor: 'white',
        margin: 20,
        flex: 1,
        borderRadius: 10
    },
    markerIcon: {
        width: 40,
        height: 40
    },
    markerText: {
        backgroundColor: 'white',
        padding: 3,
        borderRadius: 5
    },
    marker: {
        alignItems: 'center'
    }
})

export default MapScreen