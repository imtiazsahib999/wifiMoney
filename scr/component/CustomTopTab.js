import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Profile_Tab from './prediction';
import RuizLive_Tab from './eventPost';

export default class customTopTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: true,
            ruizLive: false,
        };
    }
    ScreenView() {
        if (this.state.profile) {
            return (
                <Profile_Tab navigation={this.props.navigation} />
            )
        }
        else {
            return (
                <RuizLive_Tab navigation={this.props.navigation} />
            )
        }
    }
    render() {
        return (
            <View style={styles.signinContainer}>
                {/* <View style={{  backgroundColor: Color.orange,borderTopRightRadius: 35, borderTopLeftRadius: 35, height: 80}}> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#035A8D', height: 50, }}>
                    <TouchableOpacity
                        onPress={() => this.setState({ profile: true, ruizLive: false, })}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text style={{
                            color: this.state.profile ? '#F49509' : '#fff',
                            fontSize: 15,
                            width: wp('30%'),
                            textAlign: 'center'

                        }}>Prediction</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({ profile: false, ruizLive: true, })}
                        style={{
                            marginRight: 5,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text style={{
                            color: this.state.ruizLive ? '#F49509' : '#fff',
                            fontSize: 15,
                            width: wp('30%'),
                            textAlign: 'center'

                        }}>Event Post</Text>
                    </TouchableOpacity>
                </View>
                {this.ScreenView()}
            </View>
            // </View>

        );

    }
}
const styles = StyleSheet.create({
    signinContainer: {
        flex: 1,
        backgroundColor: Color.white,

    },

})