import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, FlatList, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Delete from 'react-native-vector-icons/MaterialIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Firebase from './firebase';

export default class eventPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesMost: [],
            col: 2,
        };
    }
    componentDidMount() {
        const db = Firebase.database().ref('image/')
        db.on('value', (snapshot) => {
            const li = []
            snapshot.forEach((child) => {
                li.push({
                    key: child.key,
                    url: child.val().imageUrl,
                })
            })
            this.setState({ imagesMost: li })
            console.log("corrent", li);

        })
    }
    deleteItem(key) {
        Firebase.database().ref(`image/${key}`).remove()
    }
    renderRow = ({ item }) => {
        console.log("state", item);
        return (
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', backgroundColor: Color.greyAccent }}>
                <Image source={{ uri: item.url }} style={{ width: 70, height: 70, }} resizeMode='stretch' />
                <View style={{ marginRight: 10, justifyContent: 'center' }}>
                    <Text>{item.key}</Text>
                    {/* <Edit onPress={() => { }} style={{ marginLeft: wp('0%'), }} name={item.edit} size={26} color="#000" /> */}
                    <Delete onPress={() => { this.deleteItem(item.key) }} style={{ marginTop: wp('0%'), }} name={'delete'} size={26} color="#000" />
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('postDataPrediction')}
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