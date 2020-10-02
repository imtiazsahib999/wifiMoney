import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import Color from './../constant/color';

const SpinnerScreen = ({size})=> {
    return(
        <View style= {styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} color = {Color.orange} />
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