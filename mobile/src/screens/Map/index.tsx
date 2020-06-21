import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import MapView, { Marker } from 'react-native-maps'
import { getCurrentPositionAsync } from 'expo-location'
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {

    interface IPosition {
        lat: number
        lng: number
    }

    const [position, setPosition] = useState<IPosition>({ lat: 0, lng: 0 })

    useEffect(() => {
        getCurrentPositionAsync().then(position => {
            setPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        }).catch()        
    }, [])

    const navigation = useNavigation()

    const handleLogout = () => {
        navigation.goBack()
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
                <Marker coordinate={{ latitude: -3.6600647, longitude: -38.7559361 }}>
                    <View style={styles.marker}>
                        <Text style={styles.markerText}>asdasd</Text>
                        <Image style={styles.markerIcon} source={require('../../../assets/house.png')} />
                    </View>
                </Marker>
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