import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Color from '../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class splash extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        setTimeout(() => { this.props.navigation.navigate('mainScreen') }, 2000);
      }
    render() {
        return (
            <View style={styles.welcomeContainer}>
                <ScrollView>
                    <ImageBackground style={styles.imagebakground}
                        source={require('./../image/splash.png')} resizeMode={'stretch'} >
                            <Image source = {require('./../image/logo.png')} resizeMode = 'stretch' style={{width: 200, height: 200}} />
                    </ImageBackground>  
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        backgroundColor: Color.white
    },
    imagebakground: {
        height: hp('100%'),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
