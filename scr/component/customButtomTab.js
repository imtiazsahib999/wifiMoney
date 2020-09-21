import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Profile_Tab from './profile';
import RuizLive_Tab from './ruizLive';
import Comment_Tab from './comment';
import Espace_Tab from './espace';
import Slide_Tab from './slider';

export default class customButtomTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: true,
            ruizLive: false,
            comment: false,
            espace: false,
            slide: false,
        };
    }
    ScreenView() {
        if (this.state.profile) {
            return (
                <Profile_Tab navigation={this.props.navigation} />
            )
        }
        else if (this.state.ruizLive) {
            return (
                <RuizLive_Tab navigation={this.props.navigation} />
            )
        }
        else if (this.state.comment) {
            return (
                <Comment_Tab navigation={this.props.navigation} />
            )
        }
        else if (this.state.espace) {
            return (
                <Espace_Tab navigation={this.props.navigation} />
            )
        }
        else {
            return (
                <Slide_Tab navigation={this.props.navigation} />
            )
        }
    }
    render() {
        return (
            <View style={styles.signinContainer}>
                    {this.ScreenView()}
                    <View style={{  backgroundColor: Color.orange,borderTopRightRadius: 35, borderTopLeftRadius: 35, height: 80}}>
                        <View style={{ flexDirection: 'row',marginTop: 10, backgroundColor: '#035A8D', borderTopRightRadius: 30, borderTopLeftRadius: 30, height: 70, justifyContent: 'center',  }}>
                            <TouchableOpacity
                                onPress={() => this.setState({ profile: true, ruizLive: false, comment: false, espace: false, slide: false })}
                                style={{
                                    alignItems: 'center',
                                    width: wp('20%'),
                                    marginTop: 10,
                                }}>
                                <Image style={{ width: 30, height: 30, marginTop: 5, }}
                                    source={require('./../image/user.png')} resizeMode={'stretch'} />

                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({ profile: false, ruizLive: true, comment: false, espace: false, slide: false })}
                                style={{
                                    marginRight: 5,
                                    alignItems: 'center',
                                    marginTop: 10,

                                }}>
                                <Text style={{
                                    color: this.state.ruizLive ? '#F49509' : '#fff',
                                    fontSize: 15,
                                    width: wp('10%'),
                                    textAlign: 'center'

                                }}>Ruiz Live</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({ profile: false, ruizLive: false, comment: true, espace: false, slide: false })}
                                style={{
                                    alignItems: 'center',
                                    marginRight: 5,
                                    marginTop: 10,

                                }}>
                                <Text style={{
                                    color: this.state.comment ? '#F49509' : '#fff',
                                    fontSize: 15,
                                    width: wp('22%'),
                                    textAlign: 'center'

                                }}>Comment nous rejoinder?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({ profile: false, ruizLive: false, comment: false, espace: true, slide: false })}
                                style={{
                                    alignItems: 'center',
                                    marginRight: 5,
                                    marginTop: 10,

                                }}>
                                <Text style={{
                                    color: this.state.espace ? '#F49509' : '#fff',
                                    fontSize: 15,
                                    textAlign: 'center',
                                    width: wp('19%'),

                                }}>Espace VIP</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({ profile: false, ruizLive: false, comment: false, espace: false, slide: true })}
                                style={{
                                    alignItems: 'center',
                                    marginTop: 10,

                                }}>
                                <Image style={{ width: 30, height: 30, marginTop: 5, }}
                                    source={require('./../image/book.png')} resizeMode={'stretch'} />
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>

        );

    }
}
const styles = StyleSheet.create({
    signinContainer: {
        flex: 1,
        // backgroundColor: Color.orange,

    },
    imagebakground: {
        height: hp('13%'),
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },

})