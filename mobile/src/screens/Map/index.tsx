import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.goBack}>
                <Feather name='arrow-left' color='blue' size={30} />
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
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})

export default MapScreen