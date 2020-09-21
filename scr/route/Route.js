import {createStackNavigator} from 'react-navigation-stack';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer } from 'react-navigation';
import splash from '../component/splash';
import signIn from './../component/signIn';
import profile from './../component/profile';
import comment from './../component/comment';
import espace from './../component/espace';
import ruizLive from './../component/ruizLive';
import slide from './../component/slider';
import customButtomTab from './../component/customButtomTab';


const Route =  createStackNavigator({
    splash: {
        screen: splash,
        navigationOptions: {
            headerShown: false
        },
    },
    signIn: {
        screen: signIn,
        navigationOptions: {
            headerShown: false
        },
    },
    profile: {
        screen: profile,
        navigationOptions: {
            headerShown: false
        },
    },
    slide: {
        screen: slide,
        navigationOptions: {
            headerShown: false
        },
    },
    comment: {
        screen: comment,
        navigationOptions: {
            headerShown: false
        },
    },
    espace: {
        screen: espace,
        navigationOptions: {
            headerShown: false
        },
    },
    ruizLive: {
        screen: ruizLive,
        navigationOptions: {
            headerShown: false
        },
    },
    customButtomTab: {
        screen: customButtomTab,
        navigationOptions: {
            headerShown: false
        },
    },
  },{
      initialRouteName: 'splash'
  })

export default createAppContainer(Route);

