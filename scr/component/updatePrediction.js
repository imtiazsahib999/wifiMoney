import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Firebase from './firebase';


export default class updatePrediction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            predict: '',
            image: this.props.navigation.getParam('TEXT'),
            key: this.props.navigation.getParam('KEY'),
        };
        console.warn(this.state.image);
    }
    async updateItem(key){
        const {predict} = this.state
        await Firebase.database().ref(`addPredict/${key}`).update({prediction: predict})
    }

    render() {
        return (
            <View style={styles.signinContainer}>
                <View style={{ height: hp('9%'), }}>
                    <View style={{ marginTop: hp('2%'), }}>
                        <IcIcon onPress={() => this.props.navigation.goBack()} style={{ marginLeft: wp('0%'), }} name={'keyboard-arrow-left'} size={40} color="#000" />

                    </View>
                </View>
                <ScrollView>
                    <View style={{ marginHorizontal: '5%',marginTop: 5, }}>
                        <Text>Enter Prediction</Text>
                        <TextInput style={{}}
                            placeholder="Enter text here"
                            underlineColorAndroid={Color.greyPrimray}
                            value={this.state.predict}
                            onChangeText={predict => this.setState({ predict })}
                        />
                        <TouchableOpacity style={styles.checkoutView}
                            onPress={() => this.updateItem(this.state.key)}>
                            <Text style={styles.checkout}>Updated</Text>
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