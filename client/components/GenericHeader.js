import React from 'react'
import { Header } from 'react-native-elements';


const GenericHeader = () =>{

    return (
        <Header
            
            centerComponent={{ text: 'HARMONEY', style: { color: '#fff' } }}
            containerStyle={{
                backgroundColor: '#57c6f4',
              }}
        />
    
    );

}
export default GenericHeader 