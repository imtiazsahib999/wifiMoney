import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Firebase from './firebase';
import DateTimePickerModal from "react-native-modal-datetime-picker"
import moment from 'moment';

export default class postData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            predict: '',
            title: '',
            chooseDate: '',
            isVisibleDate: false,
        };
    }
    // ######################## date picker ####################
    handlePicker = (date) => {
        this.setState({
            isVisibleDate: false,
            chooseDate: moment(date).format('MM-DD')
        })
    };

    hidePicker = () => {
        this.setState({
            isVisibleDate: false,

        })
    };

    showPicker = () => {
        this.setState({
            isVisibleDate: true,
        })
    };
    // ##################### add data firebase #####################
    addPrediction() {
        const { predict, title, chooseDate } = this.state
        const db = Firebase.database().ref('addPredict/')
        db.push({
            prediction: predict,
            title: title,
            date: chooseDate
        })
        this.setState({
            predict: '',
            title: '',
            chooseDate: ''
        })
        { this.props.navigation.navigate('customTopTab') }

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
                    <View style={{ marginHorizontal: '5%', marginTop: 5, }}>
                        <Text style={{fontSize: 20, fontWeight: '700'}}>Prediction</Text>
                        <TextInput style={{}}
                            placeholder="Enter Title"
                            underlineColorAndroid={Color.greyPrimray}
                            value={this.state.title}
                            onChangeText={title => this.setState({ title })}
                        />
                        <TextInput style={{}}
                            placeholder="Enter Prediction"
                            underlineColorAndroid={Color.greyPrimray}
                            value={this.state.predict}
                            onChangeText={predict => this.setState({ predict })}
                        />
                        <TouchableOpacity style={[styles.input1, Color.shadow]} onPress={this.showPicker}>
                            <TextInput
                                style={{ alignSelf: 'center', color: '#000', fontWeight: '500', }}

                                //   label='Offer Description'
                                placeholder="Select Date"
                                placeholderTextColor={'#000'}
                                editable={false}
                                value={this.state.chooseDate}
                                onChangeText={chooseDate => this.setState({ chooseDate })}
                            />
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={this.state.isVisibleDate}
                            onConfirm={this.handlePicker}
                            onCancel={this.hidePicker}
                            mode={'date'}
                            datePickerModeAndroid={'spinner'}
                        />
                        <TouchableOpacity style={styles.checkoutView}
                            onPress={() => { this.addPrediction() }}>
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
    checkoutView: {
        backgroundColor: Color.orange,
        marginHorizontal: wp('10%'),
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp('5%'),
    },
    checkout: {
        color: '#fff',
        fontWeight: '700'
    },
    input1: {
        height: hp('8%'),
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 10,
    },

})