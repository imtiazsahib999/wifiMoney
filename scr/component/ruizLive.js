import React, { Component } from 'react';
import { View, StatusBar, ScrollView, ImageBackground, FlatList, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Color from './../constant/color';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Firebase from './firebase';
import { connect } from 'react-redux'

class ruizLive extends Component {
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
                })
            })
            // console.warn(this.state.imagesMost);
            this.setState({ imagesMost: li })
        })
    }
    renderRow = ({ item }) => {
        return (
            <View>
                {this.props.isSignIn === '1' &&

                    <View style={{ backgroundColor: Color.orange, width: '100%', }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginVertical: '5%', }}>

                            <Text style={{ textAlign: 'center', marginLeft: 10, }}>16/9</Text>
                            <Text style={{ marginTop: 0, paddingHorizontal: 10, }}>{item.text}</Text>
                        </View>

                        <View style={{ borderBottomColor: Color.white, borderBottomWidth: 2, marginHorizontal: '5%', }}></View>
                    </View>
                }
            </View>
        )
    }
    render() {
        // const {isSignIn} = this.props
        return (
            <View style={styles.signinContainer}>
                <ScrollView>
                    <ImageBackground source={require('./../image/back1.png')} style={{ height: 80, marginBottom: '5%', }} resizeMode='stretch' >
                        <Text style={styles.title}>Ruiz Live</Text>
                    </ImageBackground>
                    <View style={{ marginHorizontal: '5%', }}>

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
const mapStateToProps = state => ({
    isSignIn: state.auth.isLogin,
})

export default connect(mapStateToProps, null)(ruizLive)

const styles = StyleSheet.create({
    signinContainer: {
        flex: 1,
        backgroundColor: Color.homebackroundColor,
    },
    title: { alignSelf: 'center', fontSize: 25, marginTop: 15, color: Color.white, fontWeight: '600' },


})