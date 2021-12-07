import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Exemple = ({navigation}) => {
    return(
        <View style ={{
            alignContent:'center',
            justifyContent: 'center'
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Text>Rentrons dans le vif du sujet</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Exemple;