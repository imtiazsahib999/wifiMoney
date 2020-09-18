import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AntIcon from 'react-native-vector-icons/Entypo'
import Facebook from 'react-native-vector-icons/FontAwesome'
import Snapchat from 'react-native-vector-icons/FontAwesome'
import Twite from 'react-native-vector-icons/AntDesign'

export default class profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (

            <View style={styles.signinContainer}>
                <ScrollView>
                <ImageBackground source = {require('./../image/back1.png')} style={{ height: 80}} resizeMode = 'stretch' >
                <Text style={styles.title}>Ruiz Pronos</Text>
                </ImageBackground>
                <View style={{ marginHorizontal: '5%', }}>
                    <View style={{ flexDirection: 'row', marginTop: hp('5%'), }}>
                        <AntIcon style={{}} name={'arrow-bold-right'} size={24} color="#F49509"
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                        <Text style={{ marginLeft: 10, }}>Lorem ipsum, or lipsum as it is sometimes</Text>
                    </View>
                    <View style={{ flexDirection: 'row',  }}>
                        <AntIcon style={{}} name={'arrow-bold-right'} size={24} color="#F49509"
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                        <Text style={{ marginLeft: 10, }}>Lorem ipsum, or lipsum as it is sometimes</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <AntIcon style={{}} name={'arrow-bold-right'} size={24} color="#F49509"
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                        <Text style={{ marginLeft: 10, }}>Lorem ipsum, or lipsum as it is sometimes  known, is dummy text used in laying out print,</Text>
                    </View>
                    <View style={{ flexDirection: 'row',  }}>
                        <AntIcon style={{}} name={'arrow-bold-right'} size={24} color="#F49509"
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                        <Text style={{ marginLeft: 10, }}>Lorem ipsum, or lipsum as it is sometimes </Text>
                    </View>
                    <View style={styles.cliquzView}>
                        <Text style={styles.nous}>Rejoingnez nous graluitment </Text>
                        <Text style={{color: Color.white}}>Cliquez ici</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 15,}}>
                        <View style={[styles.Facebook, {backgroundColor: '#3B5998'}]}>
                        <Facebook style={{}} name={'facebook-f'} size={24} color="#fff"
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                        </View>
                        <View style={[styles.Facebook, {backgroundColor: '#FFFC00'}]}>
                        <Snapchat style={{}} name={'snapchat-ghost'} size={24} color="#fff"
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                        </View>
                        <View style={[styles.Facebook, {backgroundColor: '#55ACEE'}]}>
                        <Twite style={{}} name={'twitter'} size={24} color="#fff"
                            onPress={
                                () => this.props.navigation.navigate('#')} />
                        </View>
                    </View>
                    <Text style={{alignSelf: 'center', marginTop: 10,}}>Lorem ipsum, or lipsum as it is sometimes </Text>
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
    title: { alignSelf: 'center', fontSize: 25, marginTop: 15, color: Color.white, fontWeight: '600' },
    cliquzView:{backgroundColor: Color.orange, height: 70, borderRadius: 20, justifyContent: 'center', alignItems: 'center'},
    nous: {color: Color.white, fontWeight: 'bold', fontSize: 18},

    Facebook:{
        height: 50,
        width: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})