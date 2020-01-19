import React from 'react'
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native'

<<<<<<< HEAD:client/components/GenericButton.js
export default class GenericButton extends React.Component {
    render(){

=======
export const GenericButton = () => {
>>>>>>> ab28cb353e47931727c2a03bba4dd5c385541f07:client/components/base/GenericButton.js
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
<<<<<<< HEAD:client/components/GenericButton.js
    }
}
=======
}
>>>>>>> ab28cb353e47931727c2a03bba4dd5c385541f07:client/components/base/GenericButton.js
