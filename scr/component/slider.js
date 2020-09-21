import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, ImageBackground, SafeAreaView, Dimensions } from 'react-native';
import Swiper from 'react-native-custom-swiper';
import Football from 'react-native-vector-icons/Ionicons';
import Color from './../constant/color';
const Height = Dimensions.get("window").height
const Wight = Dimensions.get("window").wight
export default class slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgArray: [
                { image: require('./../image/back.jpg'), text: 'October 2019' },
                { image: require('./../image/back.jpg'), text: 'November 2019' },
                { image: require('./../image/back.jpg'), text: 'Deecember 2019' },
                { image: require('./../image/back.jpg'), text: 'November 2019' }
            ],
            currentIndex: 0,
        };
    }

    // Handled swipe position change
    // screenChange = index => {
    //     console.log("index when change :=> \n", index);
    //     this.setState({ currentIndex: index });
    // };

    // Render Rows
    renderImageSwipeItem = item => {
        return (
            <ImageBackground style={{ height: '100%', marginTop: '10%', marginHorizontal: '5%', }} source={item.image} resizeMode='cover'>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View></View>
                    <View style={{ backgroundColor: 'orange', width: '60%' }}>
                        <Text style={{ fontSize: 20, color: '#fff', alignSelf: 'center' }} >{item.text}</Text>
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%' }}>
                        <Football name='football' size={20} color={'#fff'} />
                        <Text style={{ color: '#fff', fontSize: 20, marginLeft: 5 }}>Football </Text>
                    </View>
                    <View style={styles.tenniusView}>
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%' }}>
                        <Football name='football' size={20} color={'#fff'} />
                        <Text style={{ color: '#fff', fontSize: 20, marginLeft: 5 }}>Tennis </Text>
                    </View>
                    <View style={styles.tenniusView}>
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%' }}>
                        <Football name='football' size={20} color={'#fff'} />
                        <Text style={{ color: '#fff', fontSize: 20, marginLeft: 5 }}>Autres </Text>
                    </View>
                    <View style={styles.tenniusView}>
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                        <Image style={styles.tennisView} source={require('./../image/images1.png')} />
                    </View>
                </View>
            </ImageBackground>
        );
    };
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ImageBackground source={require('./../image/back1.png')} style={{ height: 80 }} resizeMode='stretch' >
                        <Text style={styles.title}>Espace VIP</Text>
                    </ImageBackground>
                    <Swiper
                        // style={{ flex: 1 }}
                        currentSelectIndex={0}
                        swipeData={this.state.imgArray}
                        renderSwipeItem={this.renderImageSwipeItem}
                        onScreenChange={this.screenChange}
                    />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txtStyle: {
        fontSize: 20,
    },
    title: { alignSelf: 'center', fontSize: 25, marginTop: 15, color: Color.white, fontWeight: '600' },
    tenniusView: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: '5%',
        borderRadius: 25,
        flexWrap: 'wrap',
        padding: 10
    },
    tennisView: {
        height: 40,
        width: 40,
        marginLeft: 15,
    },
},
);