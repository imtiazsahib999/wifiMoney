import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ruizLive extends Component {
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
                <Text style={styles.title}>Ruiz Live</Text>
                </ImageBackground>
                <View style={{marginHorizontal: '5%',}}>
                    <View style={{backgroundColor: Color.orange, width: '100%', marginVertical: '5%',}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', width: '90%',  marginVertical: '5%',}}>
                            <Text style={{textAlign: 'center', marginLeft: 10,}}>16/9</Text>
                            <Text style={{ marginTop: 0,paddingHorizontal: 10,}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                        </View>
                        <View style={{borderBottomColor: Color.white, borderBottomWidth: 2, marginHorizontal: '5%',}}></View>
                        <View style={{flexDirection: 'row', alignItems: 'center', width: '90%',  marginVertical: '5%',}}>
                            <Text style={{textAlign: 'center', marginLeft: 10,}}>16/9</Text>
                            <Text style={{ marginTop: 0, paddingHorizontal: 10}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                        </View>
                        <View style={{borderBottomColor: Color.white, borderBottomWidth: 2, marginHorizontal: '5%',}}></View>
                        <View style={{flexDirection: 'row', alignItems: 'center', width: '90%',  marginVertical: '5%',}}>
                            <Text style={{textAlign: 'center', marginLeft: 10,}}>16/9</Text>
                            <Text style={{ marginTop: 0, paddingHorizontal: 10}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                        </View>
                        <View style={{borderBottomColor: Color.white, borderBottomWidth: 2, marginHorizontal: '5%',}}></View>
                        <View style={{flexDirection: 'row', alignItems: 'center', width: '90%',  marginVertical: '5%',}}>
                            <Text style={{textAlign: 'center', marginLeft: 10,}}>16/9</Text>
                            <Text style={{ marginTop: 0, paddingHorizontal: 10}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                        </View>
                        <View style={{borderBottomColor: Color.white, borderBottomWidth: 2, marginHorizontal: '5%',}}></View>
                        <View style={{flexDirection: 'row', alignItems: 'center', width: '90%',  marginVertical: '5%',}}>
                            <Text style={{textAlign: 'center', marginLeft: 10,}}>16/9</Text>
                            <Text style={{ marginTop: 0, paddingHorizontal: 10}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                        </View>
                        <View style={{borderBottomColor: Color.white, borderBottomWidth: 2, marginHorizontal: '5%',}}></View>
                        <View style={{flexDirection: 'row', alignItems: 'center', width: '90%',  marginVertical: '5%',}}>
                            <Text style={{textAlign: 'center', marginLeft: 10,}}>16/9</Text>
                            <Text style={{ marginTop: 0, paddingHorizontal: 10}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                        </View>
                        <View style={{borderBottomColor: Color.white, borderBottomWidth: 2, marginHorizontal: '5%',}}></View>
                        <View style={{flexDirection: 'row', alignItems: 'center', width: '90%',  marginVertical: '5%',}}>
                            <Text style={{textAlign: 'center', marginLeft: 10,}}>16/9</Text>
                            <Text style={{ marginTop: 0, paddingHorizontal: 10,}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                        </View>
                        <View style={{borderBottomColor: Color.white, borderBottomWidth: 2, marginHorizontal: '5%',}}></View>
                        <View style={{flexDirection: 'row', alignItems: 'center', width: '90%',  marginVertical: '5%',}}>
                            <Text style={{textAlign: 'center', marginLeft: 10,}}>16/9</Text>
                            <Text style={{ marginTop: 0, paddingHorizontal: 10}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                        </View>
                    </View>
                </View>
                </ScrollView>
            </View>

        );

    }
}
const styles = StyleSheet.create({
    signinContainer: {
        flex: 1,
        backgroundColor: Color.homebackroundColor,
    },
    title: { alignSelf: 'center', fontSize: 25, marginTop: 15, color: Color.white, fontWeight: '600' },


})