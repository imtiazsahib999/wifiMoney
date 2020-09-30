import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Color from './../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/FontAwesome'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import CheckBox from 'react-native-check-box'
// import firebase from 'firebase';
import Firebase from './firebase';
import { connect } from 'react-redux'
import { loginUser } from './../store/action/loginAction'

class espace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},

        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isSignIn === '1') {
            this.setState({
                email: '',
                password: '',
                errors: {},
            })
            this.props.navigation.navigate('customTopTab')
        }
        else if (nextProps.isSignInError) {
            if (nextProps.signInError.code === 'auth/invalid-email') {
                // Alert.alert('The email address is badly formatted.')
                this.setState({
                    errors: {
                        email: 'The email address is badly formatted.'
                    }
                })
            } else if (nextProps.signInError.code === 'auth/user-disabled') {
                this.setState({
                    errors: {
                        email: 'This User is disabled'
                    }
                })
            } else if (nextProps.signInError.code === 'auth/user-not-found') {
                this.setState({
                    errors: {
                        email: "The email address that you've entered doesn't match any account."
                    }
                })
            } else if (nextProps.signInError.code === 'auth/wrong-password') {
                this.setState({
                    errors: {
                        password: "Password is incorrect"
                    }
                })
            }
        }
    }

    render() {
        const { errors } = this.state

        return (
            <View style={styles.signinContainer}>
                <ScrollView>
                    <ImageBackground source={require('./../image/back1.png')} style={{ height: 80 }} resizeMode='stretch' >
                        <Text style={styles.title}>Espace VIP</Text>
                    </ImageBackground>
                    <View style={{ marginHorizontal: '5%', }}>
                        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '700', marginTop: 10, }}>Lorem ipsum, or lipsum sometimes</Text>
                        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '700', marginTop: 10, }}>Lorem ipsum, or lipsum as it is sometimes</Text>
                        <View style={styles.inputView}>
                            <TextInput style={{ width: '80%' }}
                                placeholder="Username"
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })}
                            />
                            <IcIcon style={{ marginRight: 10, }} name={'user'} size={26} color={Color.orange} />
                        </View>
                        {errors.email && (
                            <Text style={styles.errorTextStyle}>
                                {errors.email}
                            </Text>
                        )}
                        <View style={styles.inputView}>
                            <TextInput style={{ width: '80%' }}
                                placeholder="Password"
                                secureTextEntry={true}
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                            />
                            <IcIcon style={{ marginRight: 10, }} name={'lock'} size={26} color={Color.orange} />
                        </View>
                        {errors.password && (
                            <Text style={styles.errorTextStyle}>
                                {errors.password}
                            </Text>
                        )}
                        <TouchableOpacity onPress={() => { this.props.userLogin(this.state.email, this.state.password, this.state.errors) }} style={styles.checkoutView}>
                            <Text style={styles.checkout}>Connector</Text>
                        </TouchableOpacity>

                        <View style={{ marginLeft: wp('40%'), marginBottom: 10, }}>
                            <CheckBox
                                style={{}}
                                checkBoxColor={'#38059F'}
                                onClick={() => {
                                    this.setState({
                                        isChecked: !this.state.isChecked
                                    })
                                }}
                                isChecked={this.state.isChecked}
                                rightText={"Se Souvennir Moi"}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>

        );

    }
}
const mapStateToProps = state => ({
    isSignIn: state.auth.isLogin,
    isSignInError: state.auth.isSignInError,
    // signInLoading: state.auth.signInLoading,
    signInError: state.auth.signInError
})

const mapDispatchToProps = dispatch => ({
    userLogin: (email, password, error) => dispatch(loginUser(email, password, error)),
})

export default connect(mapStateToProps, mapDispatchToProps)(espace)

const styles = StyleSheet.create({
    signinContainer: {
        flex: 1,
        backgroundColor: Color.white,
    },
    title: { alignSelf: 'center', fontSize: 25, marginTop: 15, color: Color.white, fontWeight: '600' },
    inputView: {
        borderWidth: 2,
        borderColor: Color.greyPrimray,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: '5%',
        marginHorizontal: '5%',
    },
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
    },
    errorTextStyle: {
        fontSize: 12,
        color: '#F53107',
        opacity: 0.5,
        fontFamily: "Montserrat-Regular",
        marginHorizontal: '5%',
    },

})