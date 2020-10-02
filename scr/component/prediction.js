import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, FlatList, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IcIcon from 'react-native-vector-icons/MaterialIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Edit from 'react-native-vector-icons/MaterialIcons'
import Delete from 'react-native-vector-icons/MaterialIcons'
import Firebase from './firebase';

export default class prediction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesMost: [],
        };
    }

    componentDidMount() {
        const db = Firebase.database().ref('addPredict/')
        db.on('value', (snapshot) => {
            var li = []
            snapshot.forEach((child) => {
                li.push({
                    key: child.key,
                    text: child.val().prediction,
                    date: child.val().date,
                    title: child.val().title,
                })
            })
            console.warn(this.state.imagesMost);
            this.setState({ imagesMost: li })
        })
    }
    deleteItem(key) {
        Firebase.database().ref(`addPredict/${key}`).remove()
    }


    renderRow = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', marginTop: 10, padding: 5, justifyContent: 'space-between', backgroundColor: Color.greyAccent }}>
                <View style={{flexDirection: 'row', flex: 2}}>
                    <Text style={{ marginLeft: 10, alignSelf: 'center' }}>{item.date}</Text>
                    <View style={{width: '80%'}}>
                        <Text style={{ marginLeft: 10, marginTop: 0, fontWeight: '700' }}>{item.title}</Text>
                        <Text style={{ marginLeft: 10, marginTop: 10,  }}>{item.text}</Text>
                    </View>
                </View>
                <View style={{ marginRight: 10, justifyContent: 'center' }}>
                    <Edit onPress={() => { this.props.navigation.navigate('updatePrediction', { TEXT: item.text, KEY: item.key }) }} style={{ marginLeft: wp('0%'), }} name={'edit'} size={26} color="#000" />
                    <Delete onPress={() => { this.deleteItem(item.key) }} style={{ marginTop: wp('2%'), }} name={'delete'} size={26} color="#000" />
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.signinContainer}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View></View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('postData')}
                            style={{ backgroundColor: '#F49509', justifyContent: 'center', alignItems: 'center', marginRight: 10, marginTop: 10, width: 100, height: 40 }}>
                            <Text>Add New</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: wp('5%'), }}>
                        <FlatList
                            keyExtractor={(item, index) => item.key + ""}
                            data={this.state.imagesMost}
                            renderItem={this.renderRow} />
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

})