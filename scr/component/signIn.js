import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class signIn extends Component {

    render() {
        return (

            <View style={styles.signinContainer}>
                    <View style={{ marginLeft: '1%', }}>
                        <IcIcon style={{}} name={'keyboard-arrow-left'} size={40} color="#000"
                            onPress={() => this.props.navigation.goBack()} />
                    </View>
                <ScrollView>

                    <View style={styles.helloview}>

                        <Text style={styles.hellotext}>Hello there,{'\n'}SIGN IN  </Text>
                        <View style={{ marginHorizontal: '5%', }}>
                            <TextInput style={{}}
                                autoCompleteType="email"
                                autoCapitalize = 'none'
                                keyboardType="email-address"
                                placeholder="Email"
                                underlineColorAndroid={Color.greyPrimray}
                            />
                            <TextInput style={styles.textinput1}
                                secureTextEntry
                                autoCompleteType="password"
                                placeholder="Password"
                                underlineColorAndroid={Color.greyPrimray}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.forgetview} onPress={() => this.props.navigation.navigate('forgotPassword')}>
                            <Text style={styles.textforget}> Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                        <View style={{marginVertical: '2%',}}>
                            <TouchableOpacity style={styles.touchableopacity}
                                onPress={() => this.props.navigation.navigate('tab')}>
                                <Text style={styles.textopacity}>CONTINUE</Text>
                            </TouchableOpacity>
                        </View>


            </View>

        );

    }
}
const styles = StyleSheet.create({
    signinContainer: {
        flex: 1,
        backgroundColor: Color.homebackroundColor,
    },
    helloview: {
flex: 1
    },
    hellotext: {
        marginLeft: '5%',
        color: Color.primray,
        fontSize: 15,
    },
    textinput1: {
        marginTop: 20
    },
    forgetview: {
        alignItems: 'flex-end',
        marginRight: '5%',
    },
    textforget: {
        color: '#55D4FF',
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    touchableopacity: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3AB54A',
        borderRadius: 5,
        height: 50,
        marginHorizontal: '5%',
    },
    textopacity: {
        fontWeight: 'bold',
        textAlign: 'center'
    }

})