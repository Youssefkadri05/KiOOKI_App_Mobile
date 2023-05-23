import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PageApp from './connexion/PageApp';
import SignUpPage from './connexion/SignUpPage';
import HomePage from './pages/HomePage';
import Categories from './pages/Categories';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import EventPage from './pages/EventPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={PageApp} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="homePage" component={HomePage} />
        <Stack.Screen name="categoriesPage" component={Categories} />
        <Stack.Screen name="searchPage" component={SearchPage} />
        <Stack.Screen name="profilePage" component={ProfilePage} />
        <Stack.Screen name="editProfilePage" component={EditProfilePage} />
        <Stack.Screen name="changePasswordPage" component={ChangePasswordPage} />
        <Stack.Screen name="eventPage" component={EventPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
