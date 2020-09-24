import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import ImagePicker from 'react-native-image-crop-picker';

export default class postDataPrediction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Picture: ''
        };
    this.choosePhoto = this.choosePhoto.bind(this)

    }
    takePhoto() {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
          });
    }
    choosePhoto() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
    }
    // ImageMethod(Picture) {
    //     if (this.state.Picture) {
    //       return (
    //         <TouchableOpacity onPress={this.SelectImage}>
    //           {Picture.uri && <Image source={{ uri: this.state.Picture.uri }} style={{ width: 150, height: 150, borderRadius: 75 }} />}
    //         </TouchableOpacity>
    //       )
    //     }
    //     else {
    //       return (
    //         <TouchableOpacity onPress={this.SelectImage}>
    //           <Image source={require('./../image/user2.jpg')} style={{ width: 150, height: 150, borderRadius: 75 }} />
    //         </TouchableOpacity>
    //       )
    //     }
    //   }
    //   {this.ImageMethod(this.state.Picture)}
    render() {
        return (
            <View style={styles.signinContainer}>
                <View style={{ height: hp('9%'), }}>
                    <View style={{ marginTop: hp('2%'), }}>
                        <IcIcon onPress={() => this.props.navigation.goBack()} style={{ marginLeft: wp('0%'), }} name={'keyboard-arrow-left'} size={40} color="#000" />

                    </View>
                </View>
                <ScrollView>
                    <View style={{ marginHorizontal: '5%', marginTop: 5, }}>
                        <Text>Select Image </Text>
                        {/* <View style={{alignItems: 'center', marginTop: 10,}}>
                        <TouchableOpacity onPress={() => this.choosePhoto()} style={styles.mainView}>
                            <Text style={styles.test}>Select Image</Text>
                        </TouchableOpacity>
                        </View> */}
                        <TouchableOpacity style={styles.checkoutView1}
                            onPress={() => this.choosePhoto()}>
                            <Text style={styles.test}>Select Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.takePhoto()} style={styles.mainView}>
                            {/* <Image source={require('./../image/camera.png')} style={styles.imageFirst2} resizeMode='stretch' /> */}
                            <Text style={styles.test}>Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.choosePhoto()} style={styles.mainView}>
                            {/* <Image source={require('./../image/chat.png')} style={styles.imageFirst} resizeMode='stretch' /> */}
                            <Text style={styles.test}>Facebook</Text>
                            <Text style={styles.test}>Messenger</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.checkoutView}
                            onPress={() => this.props.navigation.navigate('#')}>
                            <Text style={styles.checkout}>Submit</Text>
                        </TouchableOpacity>
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