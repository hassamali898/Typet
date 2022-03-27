import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator,BottomTabBar} from "react-navigation-tabs";
import {CardStyleInterpolators, createStackNavigator} from 'react-navigation-stack';
import {Provider} from './src/Context/AssignContext';
import React from 'react';
import {View} from 'react-native';
import {FontAwesome5} from'@expo/vector-icons';
import Loginsrc from './src/Loginsrc';
import Signupsrc from './src/Signupsrc';
import Homesrc from './src/Homesrc';
import Camerasrc from './src/Camerasrc';
import Docsrc from './src/Docsrc';
import Profilesrc from './src/Profilesrc';
import AddDocBtn from './src/Components/AddDocBtn';
import {TabBg} from './src/Svg/Svgfiles';
import { isuserLogin } from './src/Api/loginauth';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Login:Loginsrc,
    SignUp:Signupsrc,
  },
  {
    initialRouteName:'Login',
    defaultNavigationOptions:{
      headerShown:false,
      cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
    },
  }),
  mainFlow:createStackNavigator({
    Homeflow:createBottomTabNavigator({
      Home:{
        screen:Homesrc,
        navigationOptions:{
          tabBarIcon: ({tintColor}) =><FontAwesome5 name="home" size={24} color ={tintColor} />,
          
        }
      },
      AddDoc:{
        screen:()=>null,
        navigationOptions:()=>({
          tabBarIcon:()=>{},
          tabBarOnPress:()=>{},
          tabBarOnLongPress:()=>{},
        }),
        
        
      },
      Prfile:{
        screen:Profilesrc,
        
        navigationOptions:{
          tabBarIcon: ({tintColor}) =><FontAwesome5 name="user-alt" size={24} color ={tintColor} />,
          
        }
        
      },
    },
    {
      tabBarOptions: {
        activeTintColor: '#E0DFE1',
        inactiveTintColor: '#fff',
        showLabel:false,
        
        style:{
          backgroundColor:'transparent',
          color:'transparent',
          borderTopColor:'transparent',
          zIndex:0,
          top:-15,
          margin:0,

        },
        
      },
      tabBarComponent:(props) =>{
        return(
          <View style={{bottom:-10}}><React.Fragment >
            <View style={{position:"absolute",justifyContent:"flex-end",flex: 1,width:"100%",height:"100%"}}><TabBg /></View>
            <AddDocBtn navigation={props.navigation}/>
            <BottomTabBar {...props} />
          </React.Fragment>
          
          </View>
        );
      },
      
    }),
    Camera:Camerasrc,
    Docs:Docsrc,
    
  },
  {
    defaultNavigationOptions:{
      cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      headerShown:false,
      cardStyle:{
        backgroundColor:"#fff",
      }
    }
  })
  
},{
  initialRouteName: "loginFlow"//console.log(isuserLogin())
  
}

);
const App = createAppContainer(switchNavigator); 

export default ()=>{
  return <Provider>
    <App/>
  </Provider>
}