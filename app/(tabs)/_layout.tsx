import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import {Image} from  'react-native';
import {icons} from '@/content/assets';

export default function TabLayout() {
  return (
    <Tabs initialRouteName='home' screenOptions={{  tabBarShowLabel: false, tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: 'home',
          tabBarIcon: ({ color }) => (
            <Image 
                source={icons.hometabpng}
                style={{width:20,height:20, tintColor:'green'}}
                resizeMode='contain'
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          headerShown: false,
          title: 'Settings', //the title will appear when the headerShown is True
          tabBarIcon: ({ color }) => (
            <Image 
                source={icons.spoontabpng}
                // style={{width:40,height:40,}}
                resizeMode='contain'
            />
          ),
        //   tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: 'profile',
          tabBarIcon: ({ color }) => (
            <Image 
                source={icons.profiletabpng}
                style={{}}
                resizeMode='contain'
            />
          ),
        }}
      />
    </Tabs>
  );
}
