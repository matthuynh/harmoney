import React from 'react'
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native'

export const GenericButton = () => {
    return (
        <View style={{ alignItems: 'center' }}>

            <Button
                title="A generic button"
                onPress={this.props.onPress}

                titleStyle={{ fontWeight: '500' }}
                buttonStyle={{
                  backgroundColor: 'rgba(87,198,244, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                }}
                containerStyle={{ marginTop: 5, width: 400, height: 45, }}
            />
        </View>
    );
}
