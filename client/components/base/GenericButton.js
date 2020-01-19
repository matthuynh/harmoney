import React from 'react'
import { Button } from 'react-native-elements';
import { View, TouchableOpacity, StyleSheet } from 'react-native'

export const GenericButton = (props) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Button
                title={props.text}
                titleStyle={{ fontWeight: '500' }}
                onPress={props.onPress}
                containerStyle={{ width: 400, height: 45, marginBottom: 5}}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center', 
        position: 'absolute',
        bottom: 5,
        left: 0,
        right: 0,
        ...Platform.select({
        ios: {
            shadowColor: 'black',
            shadowOffset: { width: 3, height: 5 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
        },
        android: {
            elevation: 20,
        },
        }),
        backgroundColor: 'rgba(192, 192, 192, 0.1)'
    }
});
