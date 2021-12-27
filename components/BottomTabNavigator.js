import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import RideRentScreen from "../screens/RideRentScreen";
import PreviousRidesHistoryScreen from "../screens/PreviousRidesHistoryScreen";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Rent") {
                iconName = "bicycle";
              } else if (route.name === "History") {
                iconName = "time";
              }

              return (
                <Icon
                  name={iconName}
                  size={size}
                  color={color}/>
              );
            }
          })}
          screenOptions={{
            activeTintColor:'tomato',
            inActiveTintColor:'black',
            style:{
              height:130,
              borderTopWidth:0,
              backGroundColor:'#5653d4'
            },
            labelStyle:{
              fontSize:20,
              fontFamily:"Rajashani_600SemiBold"
            },
            labelPosition:'beside-Icon',
            tabStyle:{
              marginTop:25,
              marginLeft:10,
              marginRight:10,
              borderRadius:30,
              borderWidth:2,
              alignItems:'center',
              justifyContent:'center',
              backGroundColor:'#5653d4'
            }

          }}
        >
          <Tab.Screen name="Rent" component={RideRentScreen} />
          <Tab.Screen name="History" component={PreviousRidesHistoryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}