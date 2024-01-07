import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import Login from './screens/login';
import Signup from './screens/signup';
import Verification from './screens/verification';
import Homepage from './screens/homePage';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator> 
            <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{
              headerShown: false,
            }}
            /> 
            <Stack.Screen 
            name="login" 
            component={Login} 
            options={{
              headerShown: false,
            }}
            /> 
            <Stack.Screen 
            name="signup"
            component={Signup} 
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen 
            name="verification" 
            component={Verification} 
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen 
            name="homepage" 
            component={Homepage} 
            options={{
              headerShown: false,
            }}
            />
          </Stack.Navigator>
          {/* <HomeScreen /> */}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
