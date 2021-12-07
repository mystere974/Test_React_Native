import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStackScreen from '../navigation/stackNavigation'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            headerShown: false,
            tabBarStyle:{
                position: 'absolute',
                bottom:25,
                left:20,
                right:20,
                elevation:0,
                backgroundColor: '#40A497',
                borderRadius:15,
                height:90,
                ...style.shadow
            }
            
        }}>
            <Tab.Screen name="Home" component={HomeStackScreen} options={{
                tabBarIcon:({focused}) => (
                    <View style={{
                        alignItems:'center',
                        justifyContent:'center',
                        top:10
                    }}>
                        <Image 
                        source={require('../assets/home-solid-24.png')}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? '#e32f45' : '#748c94'
                        }}
                        />
                        <Text style={{
                            color: focused ? '#e32f45' : '#748c94',
                            fontSize:12
                        }}>Home</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Settings" component={SettingsScreen} 
            options={{
                tabBarIcon:({focused}) => (
                    <View style={{
                        alignItems:'center',
                        justifyContent:'center',
                        top:10
                    }}>
                        <Image 
                        source={require('../assets/notification-solid-24.png')}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? '#e32f45' : '#748c94'
                        }}
                        />
                        <Text style={{
                            color: focused ? '#e32f45' : '#748c94',
                            fontSize:12
                        }}>Settings</Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>

    )
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs;
