import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import MapScreen from './screens/Map'

const AppStack = createStackNavigator()


const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode='none' initialRouteName='Home'>
                <AppStack.Screen component={Home} name='Home'/>
                <AppStack.Screen component={MapScreen} name='Map'/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes