import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import color from '../constant/color';

const SpinnerScreen = ({size})=> {
    return(
        <View style= {styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} color = '#000' />
        </View>
    );
};

const styles = StyleSheet.create({
    spinnerStyle:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default SpinnerScreen;