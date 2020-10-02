
import React, { Component } from 'react';
import { View, StatusBar, ImageBackground, Linking, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Color from '../constant/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/Entypo'

export default class mainScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    onShareTwitter = async () => {
        const faceBookUrl = 'https://twitter.com/login?lang=en';
        return Linking.openURL(faceBookUrl)
    }

    render() {
        return (
            <View style={styles.welcomeContainer}>
                {/* <ScrollView> */}
                {/* <TouchableOpacity onPress={this.onShareTwitter} >
                        <ImageBackground style={styles.imagebakground}
                            source={require('./../image/back.jpeg')} resizeMode={'stretch'} >
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('customButtomTab') }}
                                style={{ backgroundColor: Color.orange, marginTop: 10, marginRight: 10, width: 40, height: 40, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }}>
                                <IcIcon style={{}} name={'cross'} size={22} color={Color.white} />
                            </TouchableOpacity>
                        </ImageBackground>
                    </TouchableOpacity> */}
                {/* </ScrollView> */}
                <ImageBackground style={styles.imagebakground}
                    source={require('./../image/back.jpeg')} resizeMode={'stretch'} >
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('customButtomTab') }}
                        style={{ backgroundColor: Color.orange, marginTop: 10, marginRight: 10, width: 40, height: 40, borderRadius: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <IcIcon style={{}} name={'cross'} size={22} color={Color.white} />
                    </TouchableOpacity>
                </ImageBackground>
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
        // justifyContent: 'center',
        // alignItems: 'center'
        alignItems: 'flex-end'
    },
})
