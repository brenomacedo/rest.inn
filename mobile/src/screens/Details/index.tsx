import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native'

const Details = () => {

    type IParams = {
        details: {
            name: string
            description: string
            lat: number
            lng: number
            state: string
            city: string
        }
    }

    const navigation = useNavigation()
    const route = useRoute<RouteProp<IParams, 'details'>>()

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Feather onPress={goBack} name='arrow-left' size={30} color='#3734eb' style={styles.detailIcon} />
            <Text style={styles.title}>Details</Text>
            <Text style={styles.details}>Name: {route.params.name}</Text>
            <Text style={styles.details}>Description: {route.params.description}</Text>
            <Text style={styles.details}>Latitude: {route.params.lat}</Text>
            <Text style={styles.details}>Longitude: {route.params.lng}</Text>
            <Text style={styles.details}>State: {route.params.state}</Text>
            <Text style={styles.details}>City: {route.params.city}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    detailIcon: {
        paddingBottom: 20
    },
    container: {
        backgroundColor: '#e6e8ff',
        flex: 1,
        padding: 30,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingBottom: 12
    },
    details: {
        fontSize: 17
    }
})

export default Details