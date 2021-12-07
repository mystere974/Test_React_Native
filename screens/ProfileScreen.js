import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const ProfileScreen = ({navigation}) => {
    return (
            <View style={styles.container}>
                <Text>Profile</Text>
                <Button
                    title="Go Home"
                    onPress={() => navigation.navigate('Home')} />
                <Button title="Retour" onPress={() => navigation.navigate.goBack()} />
            </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
})