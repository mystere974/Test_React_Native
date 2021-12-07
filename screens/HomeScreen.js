import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Exemple from '../components/Exemple'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Exemple navigation={navigation}/>
            <Text>Home Sweet Home</Text>
            <Button
                title="Click Here to go to Settings"
                onPress={() => navigation.navigate('Settings')}/>
            <Button 
                title="Go directly to profile" 
                onPress={() => navigation.navigate('Profile')}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
})