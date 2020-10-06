import {createStackNavigator} from 'react-navigation-stack';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer } from 'react-navigation';
import splash from '../component/splash';
import profile from './../component/profile';
import comment from './../component/comment';
import espace from './../component/espace';
import ruizLive from './../component/ruizLive';
import slide from './../component/slider';
import postData from './../component/postData';
import updatePrediction from './../component/updatePrediction';
import postDataPrediction from './../component/postDataPrediction';
import eventPost from './../component/eventPost';
import prediction from './../component/prediction';
import customButtomTab from './../component/customButtomTab';
import customTopTab from './../component/CustomTopTab';
import mainScreen from './../component/mainScreen';

const Route =  createStackNavigator({
    splash: {
        screen: splash,
        navigationOptions: {
            headerShown: false
        },
    },
    mainScreen: {
        screen: mainScreen,
        navigationOptions: {
            headerShown: false
        },
    },
    updatePrediction: {
        screen: updatePrediction,
        navigationOptions: {
            headerShown: false
        },
    },
    prediction: {
        screen: prediction,
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
    customTopTab: {
        screen: customTopTab,
        navigationOptions: {
            headerShown: false
        },
    },
    postData: {
        screen: postData,
        navigationOptions: {
            headerShown: false
        },
    },
    postDataPrediction: {
        screen: postDataPrediction,
        navigationOptions: {
            headerShown: false
        },
    },
    eventPost: {
        screen: eventPost,
        navigationOptions: {
            headerShown: false
        },
    },
  },{
      initialRouteName: 'splash'
  })
export default createAppContainer(Route);
