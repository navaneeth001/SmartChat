import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { auth } from './firebase'
import ChatScreen from './src/screens/ChatScreen';
// import chatScreen from './src/screens/chatScrn';


const Stack = createStackNavigator();
export default function App() {

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(function (user) {
  //   if (user) {
  //   navigation.replace('Chat');
  //   } else {
  //   // No user is signed in.
  //   }
  //   });
  //   return unsubscribe;
  //   }, [])


    
return (
<NavigationContainer>
<Stack.Navigator >
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Register" component={RegisterScreen} />
<Stack.Screen name="Chat" component={ChatScreen} />
{/* <Stack.Screen name="Chatscreen" component={chatScreen} /> */}

</Stack.Navigator>
</NavigationContainer>
);
}