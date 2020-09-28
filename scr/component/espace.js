import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/FontAwesome'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import CheckBox from 'react-native-check-box'
// import firebase from 'firebase';
import Firebase from './firebase';

export default class espace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
            islogged: null,
            email: '',
            password: '',
            loding: false,
            error: ''
        };
    }
    componentDidMount(){
          Firebase.auth().onAuthStateChanged(user =>{
              if(user){
                  this.setState({islogged: true})
              }
              else{
                  this.setState({islogged: false})
              }
          })
    }

    onLogin = () =>{
        if (this.state.email === '') {
            alert("Please Enter Your Email");
            return;
        }
        else if (this.state.password === '') {
            alert("Please Enter Your Password");
            return;
        }
        else{
            Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.onLoginSuccess)
            .catch(err =>{
            // alert("Email or Password Incorrect");
            alert(err)
                this.setState({
                    error: err.message
                })
            })
        }
       
    }
    onLoginSuccess = () => {
        this.setState({
            error: '',
            loding: false
        })
        { this.props.navigation.navigate('customTopTab')}
    }

    render() {
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
                        <View style={styles.inputView}>
                            <TextInput style={{ width: '80%' }}
                                placeholder="Password"
                                secureTextEntry={true}
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                            />
                            <IcIcon style={{ marginRight: 10, }} name={'user'} size={26} color={Color.orange} />
                        </View>
                        <TouchableOpacity onPress={() => { this.onLogin() }} style={styles.checkoutView}>
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
    }


})