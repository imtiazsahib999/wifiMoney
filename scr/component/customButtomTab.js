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
import { connect } from 'react-redux'

class customButtomTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: true,
            ruizLive: false,
            comment: false,
            espace: false,
            slide: false,
            tem: '0'
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
        const {isSignIn} = this.props
        const {tem} = this.state
        return (
            <View style={styles.signinContainer}>
                    {this.ScreenView()}
                    <View style={{  backgroundColor: Color.orange,borderTopRightRadius: 35, borderTopLeftRadius: 35, height: 80}}>
                        <View style={{ flexDirection: 'row',marginTop: 10, backgroundColor: '#035A8D', borderTopRightRadius: 30, borderTopLeftRadius: 30, height: 70, justifyContent: 'center',  }}>
                            <TouchableOpacity
                                onPress={() => this.setState({ profile: true, ruizLive: false, comment: false, espace: false, slide: false })}
                                style={{
                                    alignItems: 'center',
                                    // width: wp('20%'),
                                    width: isSignIn === '0'? 100: 60,
                                    marginTop: 10,
                                }}>
                                <Image style={{ width: 30, height: 30, marginTop: 5, }}
                                    source={require('./../image/user.png')} resizeMode={'stretch'} />
                            </TouchableOpacity>
                            {isSignIn === '1' && <TouchableOpacity
                                onPress={() => this.setState({ profile: false, ruizLive: true, comment: false, espace: false, slide: false })}
                                style={{
                                    marginRight: 5,
                                    alignItems: 'center',
                                    marginTop: 10,
                                    width: 60
                                }}>
                                <Text style={{
                                    color: this.state.ruizLive ? '#F49509' : '#fff',
                                    fontSize: 15,
                                    // width: wp('10%'),
                                    textAlign: 'center'
                                }}>Ruiz Live</Text>
                            </TouchableOpacity>}
                            <TouchableOpacity
                                onPress={() => this.setState({ profile: false, ruizLive: false, comment: true, espace: false, slide: false })}
                                style={{
                                    alignItems: 'center',
                                    marginRight: 5,
                                    marginTop: 10,
                                    width: isSignIn === '0'? 100: 70,
                                }}>
                                <Text style={{
                                    color: this.state.comment ? '#F49509' : '#fff',
                                    fontSize: 15,
                                    // width: wp('22%'),
                                    textAlign: 'center'
                                }}>Comment nous rejoinder?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({ profile: false, ruizLive: false, comment: false, espace: true, slide: false })}
                                style={{
                                    alignItems: 'center',
                                    marginRight: 5,
                                    marginTop: 10,
                                    width: isSignIn === '0' ? 100: 60,
                                }}>
                                <Text style={{
                                    color: this.state.espace ? '#F49509' : '#fff',
                                    fontSize: 15,
                                    textAlign: 'center',
                                    // width: wp('19%'),
                                }}>Espace VIP</Text>
                            </TouchableOpacity>
                            {isSignIn === '1' &&<TouchableOpacity
                                onPress={() => this.setState({ profile: false, ruizLive: false, comment: false, espace: false, slide: true })}
                                style={{
                                    alignItems: 'center',
                                    marginTop: 10,
                                    width: 60
                                }}>
                                <Image style={{ width: 30, height: 30, marginTop: 5, }}
                                    source={require('./../image/book.png')} resizeMode={'stretch'} />
                            </TouchableOpacity>}
                        </View>
                    </View>
            </View>

        );

    }
}
const mapStateToProps = state => ({
    isSignIn: state.auth.isLogin,
})

export default connect(mapStateToProps, null)(customButtomTab)
const styles = StyleSheet.create({
    signinContainer: {
        flex: 1,

    },
    imagebakground: {
        height: hp('13%'),
        flex: 1,
    },

})