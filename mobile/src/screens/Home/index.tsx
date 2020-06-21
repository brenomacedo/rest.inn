import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native'
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const [fontsLoaded] = useFonts({ Roboto_400Regular })

    const navigation = useNavigation()

    const handleLogin = () => {
        navigation.navigate('Map')
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
                        <View style={styles.picker}>
                            <Text>Fortaleza</Text>
                        </View>
                        <View style={styles.picker}>
                            <Text>CE</Text>
                        </View>
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