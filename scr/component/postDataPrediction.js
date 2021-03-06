import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Color from './../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// import ImagePicker from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-picker'
import Firebase from './firebase';
import UUIDGenerator from 'react-native-uuid-generator';


export default class postDataPrediction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Picture: ''
            photo: null,
            imageId: ''
        };
    }
    handleChoosePhoto = () => {
        const options = {
            noData: true,
            // mediaType: 'photo',
        }
        ImagePicker.launchImageLibrary(options, response => {
            // console.log('res', response);
            if (response.uri) {
                // UUIDGenerator.getRandomUUID((uuid) => {
                    // console.log("uri",response.uri,);
                    const Url = response.uri
                    this.addPrediction(Url)
                    this.setState({
                        photo: response,
                    })

                // })
            }
        })
    }

    // uploadImage = async (uri, imageId) => {
    //     const response = await fetch(uri)
    //     const blob = await response.blob()
    //     const db = Firebase.storage().ref('images/'+ imageId)
    //     return db.put(blob)

    // }
    addPrediction(uri){
        const db = Firebase.database().ref('image/')
        db.push({
            imageUrl: uri
        })
        {  this.props.navigation.navigate('customTopTab')}
    }
    render() {
        const { photo } = this.state
        return (
            <View style={styles.signinContainer}>
                <View style={{ height: hp('9%'), }}>
                    <View style={{ marginTop: hp('2%'), }}>
                        <IcIcon onPress={() => this.props.navigation.goBack()} style={{ marginLeft: wp('0%'), }} name={'keyboard-arrow-left'} size={40} color="#000" />
                    </View>
                </View>
                <ScrollView>
                    <View style={{ marginHorizontal: '5%', marginTop: 5, }}>
                        <Text style={{fontSize: 20, fontWeight: '700'}}>Select Image</Text>
                        {photo && (
                            <Image
                                source={{ uri: photo.uri }}
                                style={{ width: 300, height: 300 }}/>
                        )}
                        <TouchableOpacity style={styles.checkoutView1}
                            onPress={() => this.handleChoosePhoto()}>
                            <Text style={styles.test}>Upload Image</Text>
                        </TouchableOpacity>
                        {/* {photo && (
                            <TouchableOpacity style={styles.checkoutView}
                            onPress={() => {this.props.navigation.navigate('#')}}>
                            <Text style={styles.checkout}>Submit</Text>
                        </TouchableOpacity>
                        )} */}
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
    checkoutView1: {
        backgroundColor: Color.greyPrimray,
        marginHorizontal: wp('10%'),
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp('3%'),
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
    mainView: {
        backgroundColor: Color.greyPrimray,
        borderRadius: 30,
        width: 200,
        height: 50,

        alignItems: 'center',
        justifyContent: 'center'
    },

})