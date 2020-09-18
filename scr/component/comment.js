import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class comment extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (

            <View style={styles.signinContainer}>
                <ScrollView>
                    <ImageBackground source={require('./../image/back1.png')} style={{ height: 80 }} resizeMode='stretch' >
                        <Text style={styles.title}>Comment nous Rejoingdre</Text>
                    </ImageBackground>
                    <View style={{ marginHorizontal: '5%', }}>
                        <Text style={{ marginTop: 15, textAlign: 'center' }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('#') }} style={styles.checkoutView}>
                            <Text style={styles.checkout}>Rejoins-nous</Text>
                        </TouchableOpacity>
                        <Text style={{ marginTop: 15, textAlign: 'center' }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                    </View>
                </ScrollView>
            </View>

        );

    }
}
const styles = StyleSheet.create({
    signinContainer: {
        flex: 1,
        backgroundColor: Color.white,
    },
    title: { alignSelf: 'center', textAlign: 'center', width: 200, fontSize: 25, marginTop: 5, color: Color.white, fontWeight: '600' },
    checkoutView: {
        backgroundColor: Color.orange,
        marginHorizontal: wp('10%'),
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp('3%'),
    },
    checkout: {
        color: '#fff',
        fontWeight: '700'
    }
})