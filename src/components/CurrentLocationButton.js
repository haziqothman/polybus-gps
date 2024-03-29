import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const CurrentLocationButton = (props) => {
    //
    const cb = props.cb ? props.cb :() => console.log('Callback function not passed to CurretLocationButton!');
    const bottom = props.bottom ? props.bottom : 65;
    return(
        <View style ={{top: HEIGHT - bottom}}>
            <Image
            source = {require('../assets/images/center.jpg')}
                onPress= {() => {cb()}}
            />
        </View>
    )
    
}

const styles = StyleSheet.create({
    container : {
        zIndex: 9,
        position: 'absolute',
        width: 85,
        height: 85,
        backgroundColor: '#fff',
        left: WIDTH-70,
        borderRadius: 50,
        shadowColor: '#000000',
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 1.0,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})


