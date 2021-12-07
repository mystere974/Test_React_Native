import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const SettingScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
                />
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
})